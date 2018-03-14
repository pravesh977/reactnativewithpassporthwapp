const Book = require('../models/bookmodels');

const quotesController = {};

quotesController.index = (req, res) => {
  Quote.findAll()
    .then(quotes => {
      res.json({ message: 'ok',
        quotesData: quotes,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({message: '400', err});
    });
};

quotesController.show = (req, res) => {
  Quote.findById(req.params.id)
    .then(quote => {
      res.json({
        message: 'ok',
        quote: quote,
      });
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};

quotesController.create = (req, res) => {
  console.log(req);
  Quote.create({
      content: req.body.content,
      author: req.body.author,
      genre_id: req.body.genre_id,
    })
    .then(quote => {
      res.json({message: 'ok', quote: quote});
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};



module.exports = quotesController;
