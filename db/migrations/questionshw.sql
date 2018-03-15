\connect rnhwdb

CREATE TABLE IF NOT EXISTS questionstable (
  id BIGSERIAL PRIMARY KEY,
  homeworktitle VARCHAR(255),
  homeworkdetails VARCHAR(1024),
  user_id INTEGER REFERENCES users(id)
);