const knex = require('knex')
const app = require('../src/app')
const helpers = require('./test-helpers')

describe('Books Endpoints', function() {
  let db

  const {
    testUsers,
    testBooks,
    testReviews,
  } = helpers.makeBooksFixtures()

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    })
    app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())

  before('cleanup', () => helpers.cleanTables(db))

  afterEach('cleanup', () => helpers.cleanTables(db))

  describe(`GET /api/books`, () => {
    context(`Given no books`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get('/api/books')
          .expect(200, [])
      })
    })

    context('Given there are books in the database', () => {
      beforeEach('insert books', () =>
        helpers.seedBooksTables(
          db,
          testUsers,
          testBooks,
          testReviews,
        )
      )

      it('responds with 200 and all of the books', () => {
        const expectedBooks = testBooks.map(book =>
          helpers.makeExpectedBook(
            testUsers,
            book,
            testReviews,
          )
        )
        return supertest(app)
          .get('/api/books')
          .expect(200, expectedBooks)
      })
    })

    context(`Given an XSS attack book`, () => {
      const testUser = helpers.makeUsersArray()[1]
      const {
        maliciousBook,
        expectedBook,
      } = helpers.makeMaliciousBook(testUser)

      beforeEach('insert malicious Book', () => {
        return helpers.seedMaliciousBook(
          db,
          testUser,
          maliciousBook,
        )
      })

      it('removes XSS attack content', () => {
        return supertest(app)
          .get(`/api/books`)
          .expect(200)
          .expect(res => {
            expect(res.body[0].title).to.eql(expectedBook.title)
            expect(res.body[0].content).to.eql(expectedBook.content)
          })
      })
    })
  })

  describe(`GET /api/books/:book_id`, () => {
    context(`Given no books`, () => {
      beforeEach(() => helpers.seedUsers(db, testUsers))
      it(`responds with 404`, () => {
        const bookId = 123456
        return supertest(app)
          .get(`/api/books/${bookId}`)
          .expect(404, { error: `Missing bearer token` })
      })
    })

    context('Given there are books in the database', () => {
      beforeEach('insert books', () =>
        helpers.seedBooksTables(
          db,
          testUsers,
          testBooks,
          testReviews,
        )
      )

      it('responds with 200 and the specified book', () => {
        const bookId = 2
        const expectedBook = helpers.makeExpectedBook(
          testUsers,
          testBooks[bookId - 1],
          testReviews,
        )

        return supertest(app)
          .get(`/api/books/${bookId}`)
          .set("Authorization", helpers.makeAuthHeader(testUsers[0]))
          .expect(200, expectedBook)
      })
    })

    context(`Given an XSS attack book`, () => {
      const testUser = helpers.makeUsersArray()[1]
      const {
        maliciousBook,
        expectedBook,
      } = helpers.makeMaliciousBook(testUser)

      beforeEach('insert malicious book', () => {
        return helpers.seedMaliciousBook(
          db,
          testUser,
          maliciousBook,
        )
      })

      it('removes XSS attack content', () => {
        return supertest(app)
          .get(`/api/books/${maliciousBook.id}`)
          .set("Authorization", helpers.makeAuthHeader(testUser))
          .expect(200)
          .expect(res => {
            expect(res.body.title).to.eql(expectedBook.title)
            expect(res.body.content).to.eql(expectedBook.content)
          })
      })
    })
  })

  describe(`GET /api/books/:book_id/reviews`, () => {
    context(`Given no books`, () => {
      beforeEach(() => helpers.seedUsers(db, testUsers))
      it(`responds with 404`, () => {
        const bookId = 123456
        return supertest(app)
          .get(`/api/books/${bookId}/reviews`)
          .set("Authorization", helpers.makeAuthHeader(testUsers[0]))
          .expect(404, { error: `Book doesn't exist` })
      })
    })

    context('Given there are reviews for book in the database', () => {
      beforeEach('insert books', () =>
        helpers.seedBooksTables(
          db,
          testUsers,
          testBooks,
          testReviews,
        )
      )

      it('responds with 200 and the specified reviews', () => {
        const bookId = 1
        const expectedReviews = helpers.makeExpectedBookReviews(
          testUsers, bookId, testReviews
        )

        return supertest(app)
          .get(`/api/books/${bookId}/reviews`)
          .set("Authorization", helpers.makeAuthHeader(testUsers[0]))
          .expect(200, expectedReviews)
      })
    })
  })
})