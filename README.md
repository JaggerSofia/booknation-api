# BookNation API

## Database Setup
To set up the database:
1. Make sure you are in psql in your command line.
2. Run the SQL command `CREATE USER reader;`.
3. Run the SQL command `CREATE DATABASE booknation OWNER reader;`.
4. Ensure your .env file is created and has the line `DB_URL="postgresql://reader@localhost/booknation"`.
5. Exit psql and run the command `npm run migrate` to create the tables in the database.
6. To seed the database with a few locations, run `psql -U reader -d booknation -f ./seeds/seed.locations.sql` in your command line.

### Base URL: https://shrouded-wave-72208.herokuapp.com/api

## Overview:

This API exists so that users can review a book database so that a review of the book may be given so that future readers can see what others thing of the book.

## Endpoints: 

#### Get all Books using GET /books

Calls this endpoint to see all books on the site

**Example**
```javascript
getBooks() {
    return fetch(`https://shrouded-wave-72208.herokuapp.com/api/books`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        if (!res.ok)  {
          res.json().then(e => Promise.reject(e));
        }
        return res.json()
      })
  },
```

#### Get a particular book using GET /books/:id
```javascript
getBook(bookId) {
    return fetch(`${config.API_ENDPOINT}/books/${bookId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        if (!res.ok)  {
          res.json().then(e => Promise.reject(e));
        }
        return res.json()
      })
  },
```

#### Get all reviews for specific book GET /books/:id/reviews
```javascript
getBookReviews(bookId) {
    return fetch(`${config.API_ENDPOINT}/books/${bookId}/reviews`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        if (!res.ok)  {
          res.json().then(e => Promise.reject(e));
        }
        return res.json()
      })
  },
```

#### Add a review to a book using POST /reviews
```javascript
postReview(bookId, text, rating) {
    return fetch(`${config.API_ENDPOINT}/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        book_id: bookId,
        rating,
        text,
      }),
    })
      .then(res => {
        if (!res.ok)  {
          res.json().then(e => Promise.reject(e));
        }
        return res.json()
      })
  }
}
```


# Technologies Used

**Front End**

* JavaScript
* React

**Back End**

* Node.js
* Express
* PostgreSQL


# Screenshots

**BookNation Main Page: Full Screen**


![Full Screen](https://user-images.githubusercontent.com/53195545/81482067-39b82b80-91e9-11ea-9289-3d4a0aaa15af.png)

**BookNation Main Page: Mobile**


![Mobile](https://user-images.githubusercontent.com/53195545/81482069-3b81ef00-91e9-11ea-80de-a867cf9f42e3.png)


**BookNation Book Information Page: Full Screen**


![Full Screen](https://user-images.githubusercontent.com/53195545/81482075-4046a300-91e9-11ea-9410-96b5eadf730d.png)

**BookNation Book Information Page: Mobile**


![Mobile Part 1](https://user-images.githubusercontent.com/53195545/81482071-3cb31c00-91e9-11ea-85b6-d581551f0d40.png)
![Mobile Part 2](https://user-images.githubusercontent.com/53195545/81482073-3de44900-91e9-11ea-83ff-ac7a43f68b98.png)


By [Victoria Moore](https://github.com/JaggerSofia). 