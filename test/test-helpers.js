const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function makeUsersArray() {
  return [
    {
      id: 1,
      user_name: 'test-user-1',
      full_name: 'Test user 1',
      nickname: 'TU1',
      password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 2,
      user_name: 'test-user-2',
      full_name: 'Test user 2',
      nickname: 'TU2',
      password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 3,
      user_name: 'test-user-3',
      full_name: 'Test user 3',
      nickname: 'TU3',
      password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 4,
      user_name: 'test-user-4',
      full_name: 'Test user 4',
      nickname: 'TU4',
      password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
  ]
}

function makeBooksArray(users) {
  return [
    {
      id: 1,
      title: 'First test book!',
      image: 'http://placehold.it/500x500',
      user_id: users[0].id,
      date_created: '2029-01-22T16:28:32.615Z',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
    },
    {
      id: 2,
      title: 'Second test book!',
      image: 'http://placehold.it/500x500',
      user_id: users[1].id,
      date_created: '2029-01-22T16:28:32.615Z',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
    },
    {
      id: 3,
      title: 'Third test book!',
      image: 'http://placehold.it/500x500',
      user_id: users[2].id,
      date_created: '2029-01-22T16:28:32.615Z',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
    },
    {
      id: 4,
      title: 'Fourth test book!',
      image: 'http://placehold.it/500x500',
      user_id: users[3].id,
      date_created: '2029-01-22T16:28:32.615Z',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
    },
  ]
}

function makeReviewsArray(users, books) {
  return [
    {
      id: 1,
      rating: 2,
      text: 'First test review!',
      id: books[0].id,
      user_id: users[0].id,
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 2,
      rating: 3,
      text: 'Second test review!',
      id: books[0].id,
      user_id: users[1].id,
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 3,
      rating: 1,
      text: 'Third test review!',
      id: books[0].id,
      user_id: users[2].id,
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 4,
      rating: 5,
      text: 'Fourth test review!',
      id: books[0].id,
      user_id: users[3].id,
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 5,
      rating: 1,
      text: 'Fifth test review!',
      id: books[books.length - 1].id,
      user_id: users[0].id,
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 6,
      rating: 2,
      text: 'Sixth test review!',
      id: books[books.length - 1].id,
      user_id: users[2].id,
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 7,
      rating: 5,
      text: 'Seventh test review!',
      id: books[3].id,
      user_id: users[0].id,
      date_created: '2029-01-22T16:28:32.615Z',
    },
  ];
}

function makeExpectedBook(users, book, reviews=[]) {
  const user = users
    .find(user => user.id === book.user_id)

  const bookReviews = reviews
    .filter(review => review.id === book.id)

  const number_of_reviews = bookReviews.length
  const average_review_rating = calculateAverageReviewRating(bookReviews)

  return {
    id: book.id,
    image: book.image,
    title: book.title,
    content: book.content,
    date_created: book.date_created,
    number_of_reviews,
    average_review_rating,
    user: {
      id: user.id,
      user_name: user.user_name,
      full_name: user.full_name,
      nickname: user.nickname,
      date_created: user.date_created,
    },
  }
}

function calculateAverageReviewRating(reviews) {
  if(!reviews.length) return 0

  const sum = reviews
    .map(review => review.rating)
    .reduce((a, b) => a + b)

  return Math.round(sum / reviews.length)
}

function makeExpectedBookReviews(users, bookId, reviews) {
  const expectedReviews = reviews
    .filter(review => review.id === bookId)

  return expectedReviews.map(review => {
    const reviewUser = users.find(user => user.id === review.user_id)
    return {
      id: review.id,
      text: review.text,
      rating: review.rating,
      date_created: review.date_created,
      user: {
        id: reviewUser.id,
        user_name: reviewUser.user_name,
        full_name: reviewUser.full_name,
        nickname: reviewUser.nickname,
        date_created: reviewUser.date_created,
      }
    }
  })
}

function makeMaliciousBook(user) {
  const maliciousBook = {
    id: 911,
    image: 'http://placehold.it/500x500',
    date_created: new Date().toISOString(),
    title: 'Naughty naughty very naughty <script>alert("xss");</script>',
    user_id: user.id,
    content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
  }
  const expectedBook = {
    ...makeExpectedBook([user], maliciousBook),
    title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
    content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`,
  }
  return {
    maliciousBook,
    expectedBook,
  }
}

function makeBooksFixtures() {
  const testUsers = makeUsersArray()
  const testBooks = makeBooksArray(testUsers)
  const testReviews = makeReviewsArray(testUsers, testBooks)
  return { testUsers, testBooks, testReviews }
}

function cleanTables(db) {
  return db.raw(
    `TRUNCATE
      booknation_books,
      booknation_users,
      booknation_reviews
      RESTART IDENTITY CASCADE`
  )
}

function seedUsers(db, users) {
  const preppedUsers = users.map(user => ({ 
    ...user,
    password: bcrypt.hashSync(user.password, 1)
  }));
  return db
    .into('booknation_users')
    .insert(preppedUsers)
    .then(() => 
      db.raw(`SELECT setval('booknation_users_id_seq', ?)`, [ users[users.length - 1].id ])
        )
}

function seedBooksTables(db, users, books, reviews = []) {
  return db.transaction(async trx => {
    await seedUsers(trx, users);
    await trx.into("booknation_books").insert(books);
    await trx.raw(`SELECT setval('booknation_books_id_seq', ?)`, [
      books[books.length - 1].id
    ]);
    if (reviews.length) {
      await trx.into("booknation_reviews").insert(reviews);
      await trx.raw(`SELECT setval('booknation_reviews_id_seq', ?)`, [
        reviews[reviews.length - 1].id
      ]);
    }
  });
}

function seedMaliciousBook(db, user, book) {
  return db
    .into('booknation_users')
    .insert([user])
    .then(() =>
      db
        .into('booknation_books')
        .insert([book])
    )
}

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
  const token = jwt.sign({ user_id: user.id }, secret, {
    subject: user.user_name,
    algorithm: 'HS256',
  })
  return `Bearer ${token}`
}

module.exports = {
  makeUsersArray,
  makeBooksArray,
  makeExpectedBook,
  makeExpectedBookReviews,
  makeMaliciousBook,
  makeReviewsArray,
  makeBooksFixtures,
  cleanTables,
  seedBooksTables,
  seedMaliciousBook,
  seedUsers,
  makeAuthHeader,
}