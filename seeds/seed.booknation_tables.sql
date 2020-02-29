BEGIN;

TRUNCATE
  booknation_reviews,
  booknation_books,
  booknation_users
  RESTART IDENTITY CASCADE;

INSERT INTO booknation_users (user_name, full_name, nickname, password)
VALUES
  ('dunder', 'Dunder Mifflin', null, '$2a$12$XDX3Kp6DyFwX.LNLrSPrjelYwC/YQNkG7TEHS01h7hYr2DT.AJY2m'),
  ('b.deboop', 'Bodeep Deboop', 'Bo', '$2a$12$lveEIJ2eddiT.0S9Ral4AesL/47WVZ0r4KtUKkQPgOcJ2SwOFB/CW'),
  ('c.bloggs', 'Charlie Bloggs', 'Charlie', '$2a$12$BGXlSJEr4Gle2dbFz9Tmg.bHPqMelisxrN0i.hXyyitSUFuDOAsnm'),
  ('s.smith', 'Sam Smith', 'Sam', '$2a$12$GhYHEvNILSR5STahE35ebO/lJZw3P.OBGeDsmDUEitpL4B4WwVC4.'),
  ('lexlor', 'Alex Taylor', 'Lex', '$2a$12$mGvgMii0KQCZm4MOy8scj./O.W2vMl6Xwax/TnZzvzEdciIlHjW8W'),
  ('wippy', 'Ping Won In', 'Ping', '$2a$12$79Pjv2VAGc3jHcmu9QPrfeVuF.PtXOIbnPNLCULAZVeqQW/TbXusy');

INSERT INTO booknation_books (title, image, user_id, content)
VALUES
    ()
  

INSERT INTO booknation_reviews (
  text,
  rating,
  thing_id,
  user_id
) VALUES
  (
    'This thing is amazing.',
    4,
    1,
    2
  ),
  (
    'Put a bird on it!',
    4,
    1,
    3
  ),
  (
    'All the other reviewers are obviously insane, but this thing is actually pretty amazing.',
    5,
    1,
    4
  ),
  (
    'When life gives you lemons, trade them for this thing.',
    4,
    1,
    5
  ),
  (
    'This cured my psoriasis, but left me unable to tell the difference between the taste of squash and the concept of increasing.',
    3,
    2,
    6
  ),
  (
    'I think I swallowed a bug.',
    1,
    2,
    1
  ),
  (
    'I have not used it or even seen it, and I do not actually know what it is. I do not know why I am writing this review, how I got here, or what my name is. Three stars!',
    3,
    2,
    3
  ),
  (
    'Ew.',
    1,
    4,
    6
  ),
  (
    'I heard about this one time at band camp.',
    3,
    4,
    4
  ),
  (
    'big time many goodness!!!',
    5,
    10,
    3
  );
  

COMMIT;