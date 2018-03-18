const express = require('express');
const hwquestionsroute = express.Router();
const hwquestionscontroller = require('../controllers/hwquestionscontroller');

hwquestionsroute.get('/', hwquestionscontroller.index);
hwquestionsroute.post('/', hwquestionscontroller.create);
hwquestionsroute.get('/:id', hwquestionscontroller.show);
module.exports = hwquestionsroute;