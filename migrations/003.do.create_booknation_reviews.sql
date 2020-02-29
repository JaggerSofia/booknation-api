CREATE TABLE booknation_reviews (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    rating INTEGER NOT NULL,
    date_created TIMESTAMP DEFAULT now() NOT NULL,
    thing_id INTEGER
        REFERENCES booknation_books(id) ON DELETE CASCADE NOT NULL,
    user_id INTEGER
        REFERENCES booknation_users(id) ON DELETE CASCADE NOT NULL
);