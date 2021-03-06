const knex = require('knex')
const app = require('../src/app')
const helpers = require('./test-helpers')

describe('Reviews Endpoints', function() {
  let db

  const {
    testBooks,
    testUsers,
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

  describe(`POST /api/reviews`, () => {
    beforeEach('insert books', () =>
      helpers.seedBooksTables(
        db,
        testUsers,
        testBooks,
      )
    )

    it.skip(`creates an review, responding with 201 and the new review`, function() {
      this.retries(3)
      const testBook = testBooks[0]
      const testUser = testUsers[0]
      const newReview = {
        text: 'Test new review',
        rating: 3,
        id: testBook.id,
        user_id: testUser.id,
      }
      return supertest(app)
        .post('/api/reviews')
        .set("Authorization", helpers.makeAuthHeader(testUsers[0]))
        .send(newReview)
        .expect(201)
        .expect(res => {
          expect(res.body).to.have.property('id')
          expect(res.body.rating).to.eql(newReview.rating)
          expect(res.body.text).to.eql(newReview.text)
          expect(res.body.id).to.eql(newReview.id)
          expect(res.body.user.id).to.eql(testUser.id)
          expect(res.headers.location).to.eql(`/api/reviews/${res.body.id}`)
          const expectedDate = new Date().toLocaleString()
          const actualDate = new Date(res.body.date_created).toLocaleString()
          expect(actualDate).to.eql(expectedDate)
        })
        .expect(res =>
          db
            .from('booknation_reviews')
            .select('*')
            .where({ id: res.body.id })
            .first()
            .then(row => {
              expect(row.text).to.eql(newReview.text)
              expect(row.rating).to.eql(newReview.rating)
              expect(row.id).to.eql(newReview.id)
              expect(row.user_id).to.eql(newReview.user_id)
              const expectedDate = new Date().toLocaleString()
              const actualDate = new Date(row.date_created).toLocaleString()
              expect(actualDate).to.eql(expectedDate)
            })
        )
    })

    const requiredFields = ['text', 'rating', 'user_id', 'id']

    requiredFields.forEach(field => {
      const testBook = testBooks[0]
      const testUser = testUsers[0]
      const newReview = {
        text: 'Test new review',
        rating: 3,
        user_id: testUser.id,
        id: testBook.id,
      }

      it(`responds with 400 and an error message when the '${field}' is missing`, () => {
        delete newReview[field]

        return supertest(app)
          .post('/api/reviews')
          .set("Authorization", helpers.makeAuthHeader(testUsers[0]))
          .send(newReview)
          .expect(400, {
            error: `Missing '${field}' in request body`,
          })
      })
    })
  })
})