const xss = require('xss')
const Treeize = require('treeize')

const BooksService = {
  getAllBooks(db) {
    return db
      .from('booknation_books AS bks')
      .select(
        'bks.id',
        'bks.title',
        'bks.date_created',
        'bks.content',
        'bks.image',
        ...userFields,
        db.raw(
          `count(DISTINCT rev) AS number_of_reviews`
        ),
        db.raw(
          `AVG(rev.rating) AS average_review_rating`
        ),
      )
      .leftJoin(
        'booknation_reviews AS rev',
        'bks.id',
        'rev.id',
      )
      .leftJoin(
        'booknation_users AS usr',
        'bks.user_id',
        'usr.id',
      )
      .groupBy('bks.id', 'usr.id')
  },

  getById(db, id) {
    return BooksService.getAllBooks(db)
      .where('bks.id', id)
      .first()
  },

  getReviewsForBook(db, id) {
    return db
      .from('booknation_reviews AS rev')
      .select(
        'rev.id',
        'rev.rating',
        'rev.text',
        'rev.date_created',
        ...userFields,
      )
      .where('booknation_books.id', id)
      .innerJoin('booknation_books', 'rev.book_id', 'booknation_books.id')
      .innerJoin(
        'booknation_users AS usr',
        'rev.user_id',
        'usr.id',
      )
      .groupBy('rev.id', 'usr.id')
  },

  serializeBooks(books) {
    return books.map(this.serializeBook)
  },

  serializeBook(book) {
    const bookTree = new Treeize()

    const bookData = bookTree.grow([ book ]).getData()[0]

    return {
      id: bookData.id,
      title: xss(bookData.title),
      content: xss(bookData.content),
      date_created: bookData.date_created,
      image: bookData.image,
      user: bookData.user || {},
      number_of_reviews: Number(bookData.number_of_reviews) || 0,
      average_review_rating: Math.round(bookData.average_review_rating) || 0,
    }
  },

  serializeBookReviews(reviews) {
    return reviews.map(this.serializeBookReview)
  },

  serializeBookReview(review) {
    const reviewTree = new Treeize()

    
    const reviewData = reviewTree.grow([ review ]).getData()[0]

    return {
      id: reviewData.id,
      rating: reviewData.rating,
      book_id: reviewData.book_id,
      text: xss(reviewData.text),
      user: reviewData.user || {},
      date_created: reviewData.date_created,
    }
  },
}

const userFields = [
  'usr.id AS user:id',
  'usr.user_name AS user:user_name',
  'usr.full_name AS user:full_name',
  'usr.nickname AS user:nickname',
  'usr.date_created AS user:date_created',
  'usr.date_modified AS user:date_modified',
]

module.exports = BooksService