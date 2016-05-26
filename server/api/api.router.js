'use strict';

var router = require('express').Router();

router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));

router.use('/login', require('./login/login.router'));

router.use('/logout', require('./logout/logout.router'));

module.exports = router;
