'use strict';

var router = require('express').Router();

var HttpError = require('../../utils/HttpError');
var User = require('../users/user.model');

// make sure this comes after the session middleware, otherwise req.session will not be available
router.get('/', function (req, res, next) {
  res.redirect('/login')
  .catch(next);
});

module.exports = router;