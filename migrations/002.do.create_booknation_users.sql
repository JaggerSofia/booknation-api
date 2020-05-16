CREATE TABLE booknation_users (
  id SERIAL PRIMARY KEY,
  user_name TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  password TEXT NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT now(),
  date_modified TIMESTAMP
);

ALTER TABLE booknation_books
  ADD COLUMN
    user_id INTEGER REFERENCES booknation_users(id)
    ON DELETE SET NULL;