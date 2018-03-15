const HwQuestions = require('../models/hwquestionmodels');

const hwquestionscontroller = {};

hwquestionscontroller.index = (req, res) => {
  HwQuestions.findAll()
    .then(questions => {
      res.json({ message: 'ok',
        questionsData: questions,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({message: '400', err});
    });
};

hwquestionscontroller.show = (req, res) => {
  HwQuestions.findById(req.params.id)
    .then(question => {
      res.json({
        message: 'ok',
        question: question,
      });
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};

hwquestionscontroller.create = (req, res) => {
  console.log(req);
  HwQuestions.create({
    homeworktitle: req.body.homeworktitle,
    homeworkdetails: req.body.homeworkdetails,
    user_id: req.body.user_id,
    })
    .then(addedQuestion => {
      res.json({message: 'ok', addedQuestion: addedQuestion});
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};



module.exports = hwquestionscontroller;
