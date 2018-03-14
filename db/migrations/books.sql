\connect rnativedb

CREATE TABLE IF NOT EXISTS books (
  id BIGSERIAL PRIMARY KEY,
  content VARCHAR(1024),
  author VARCHAR(255),
  user_id INTEGER REFERENCES users(id)
);