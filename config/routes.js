// /config/routes.js

// We need to require Passport since we now reference it in our routes file.
var express = require('express');
var passport = require('passport');
var router = express.Router();
var usersController = require('../controllers/users');

// function authenticatedUser()
// router.route( '/', '/signup', '/login', '/logout', '/secret')

// passport.authenticate('yahoo') is all we need to trigger that redirect to yahoo.
router.route('/auth/yahoo')
.get(passport.authenticate('yahoo'));

router.route('/auth/yahoo/callback')
.get(passport.authenticate('yahoo', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

module.exports = router;
