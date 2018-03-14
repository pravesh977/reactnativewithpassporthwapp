const express = require('express');
const myauthroute = express.Router();
const usercontroller = require('../controllers/usercontroller');

const authHelpers = require('../authservices/authHelpers');
const passport = require('../authservices/local');


myauthroute.post('/register', usercontroller.create);

myauthroute.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/authroutes/login',
    failureFlash: false,
  })
);

module.exports = myauthroute;
