const bcrypt = require('bcryptjs');
const User = require('../models/usermodels');

const usercontroller = {};

usercontroller.create = (req, res, next) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);

  User.create({
    username: req.body.username,
    password: hash,
  })
    .then(user => {
      // console.log(user, "userrrr");
      // res.json({
      //   message: "okay",
      //   user: user,
      // });
      req.login(user, err => {
        if (err) { return next(err); }
        return res.redirect('/user');   
      });
      // console.log(user, "userrr1232r");
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

module.exports = usercontroller;