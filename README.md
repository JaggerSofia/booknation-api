# Get Meals API

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


By [Victoria Moore](https://github.com/JaggerSofia). 