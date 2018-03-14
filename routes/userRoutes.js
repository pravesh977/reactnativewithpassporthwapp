const express = require('express');

const userRoutes = express.Router();

userRoutes.get('/', (req, res) => {
  res.json({ user: 'user profile', userInfo: req.user });
  console.log(req.user, "req.userdata on userRoutes.js");
});

module.exports = userRoutes;