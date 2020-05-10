const express = require('express')
const BooksService = require('./books-service')
const { requireAuth } = require('../middleware/jwt-auth')

const booksRouter = express.Router()

booksRouter
  .route('/')
  .get((req, res, next) => {
    BooksService.getAllBooks(req.app.get('db'))
      .then(books => {
        res.json(BooksService.serializeBooks(books))
      })
      .catch(next)
  })

booksRouter
  .route('/:bookId')
  .all(requireAuth)
  .all(checkBookExists)
  .get((req, res) => {
    res.json(BooksService.serializeBook(res.book))
  })

booksRouter.route('/:bookId/reviews/')
  .all(requireAuth)
  .all(checkBookExists)
  .get((req, res, next) => {
    BooksService.getReviewsForBook(
      req.app.get('db'),
      req.params.id
    )
      .then(reviews => {
        res.json(BooksService.serializeBookReviews(reviews))
      })
      .catch(next)
  })

/* async/await syntax for promises */
async function checkBookExists(req, res, next) {
  try {
    const book = await BooksService.getById(
      req.app.get('db'),
      req.params.id
    )

    if (!book)
      return res.status(404).json({
        error: `Book doesn't exist`
      })

    res.book = book
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = booksRouter