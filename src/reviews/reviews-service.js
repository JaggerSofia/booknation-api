const xss = require('xss')

const ReviewsService = {
  getById(db, id) {
    return db
      .from('booknation_reviews AS rev')
      .select(
        'rev.id',
        'rev.book_id',
        'rev.rating',
        'rev.text',
        'rev.date_created',
        'rev.id',
        db.raw(
          `row_to_json(
            (SELECT tmp FROM (
              SELECT
                usr.id,
                usr.user_name,
                usr.full_name,
                usr.nickname,
                usr.date_created,
                usr.date_modified
            ) tmp)
          ) AS "user"`
        )
      )
      .leftJoin(
        'booknation_users AS usr',
        'rev.user_id',
        'usr.id',
      )
      .where('rev.id', id)
      .first()
  },

  insertReview(db, newReview) {
    return db
      .insert(newReview)
      .into('booknation_reviews')
      .returning('*')
      .then(([review]) => review)
      .then(review =>
        ReviewsService.getById(db, review.id)
      )
  },

  serializeReview(review) {
    return {
      id: review.id,
      book_id: review.book_id,
      rating: review.rating,
      text: xss(review.text),
      id: review.id,
      date_created: review.date_created,
      user: review.user || {},
    }
  }
}

module.exports = ReviewsService