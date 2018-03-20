const db = require('../db/config');

const HwQuestions = {};

HwQuestions.findAll = () => {
  // return db.query('SELECT * FROM questionstable ORDER BY id ASC');
  return db.query('SELECT questionstable.id, homeworktitle, homeworkdetails, user_id, username FROM questionstable INNER JOIN users ON questionstable.user_id = users.id ORDER BY questionstable.id DESC');
};

HwQuestions.findById = id => {
  return db.oneOrNone('SELECT * FROM questionstable WHERE id = $1', [id]);
};

HwQuestions.create = question => {
  return db.one(
    `
      INSERT INTO questionstable
      (homeworktitle, homeworkdetails, user_id)
      VALUES ($1, $2, $3) RETURNING *
    `,
    [question.homeworktitle, question.homeworkdetails, question.user_id]
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

module.exports = HwQuestions;