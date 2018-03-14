const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const User = require('../models/usermodels');
const authHelpers = require('./authHelpers');

const options = {};

init();

passport.use(
  new LocalStrategy(options, (username, password, done) => {
    User.findByUserName(username)
      .then(user => {
        if (!user) {
          console.log("username not found");
          return done(null, false);
        }
        if (!authHelpers.comparePass(password, user.password)) {
          console.log("wrong password entered");
          return done(null, false);
        } else {
          console.log("login passed enjoy");
          return done(null, user);
        }
      })
      .catch(err => {
        return done(err);
      });
  })
);

module.exports = passport;