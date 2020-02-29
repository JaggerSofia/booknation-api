ALTER TABLE booknation_books
  DROP COLUMN IF EXISTS user_id;

DROP TABLE IF EXISTS booknation_users;