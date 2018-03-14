const db = require('../db/config');

const Book = {};

Book.findAll = () => {
  return db.query('SELECT * FROM books ORDER BY id ASC');
};

Book.findById = id => {
  return db.oneOrNone('SELECT * FROM books WHERE id = $1', [id]);
};

Book.create = book => {
  return db.one(
    `
      INSERT INTO books
      (content, author, user_id)
      VALUES ($1, $2, $3) RETURNING *
    `,
    [book.content, book.author, book.user_id]
  );
};

// Quote.update = (quote, id) => {
//   return db.none(
//     `
//       UPDATE quotes SET
//       content = $1,
//       author = $2,
//       genre_id = $3
//       WHERE id = $4
//     `,
//     [quote.content, quote.author, quote.genre_id, id]
//   );
// };

// Quote.destroy = id => {
//   return db.none(
//     `
//       DELETE FROM quotes
//       WHERE id = $1
//     `,
//     [id]
//   );
// };

module.exports = Book;