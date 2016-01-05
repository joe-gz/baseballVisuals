
// /config/passport.js

// New Requires
// (1) YahooStrategy: middleware required to implement yahoo login via Passport.
// (2) Env: so we can access our yahoo API information.
var YahooStrategy = require('passport-yahoo').Strategy;
var User            = require('../models/user');
var env             = require('../env');

module.exports = function(passport){

  // passport.serializeUser(), .deserializeUser(), .use('local-signup', new LocalStrategy())

  passport.use('yahoo', new YahooStrategy({
    // Here we reference the values in env.js.
    consumerKey: env.consumerKey,
    consumerSecret: env.consumerSecret,
    callbackUrl: env.callbackUrl
  }, function(token, secret, profile, done){
  process.nextTick(function(){
    User.findOne({'yahoo.id': profile.id}, function(err, user){
      if(err) return done(err);

      // If the user already exists, just return that user.
      if(user){
        return done(null, user);
      } else {
        // Otherwise, create a brand new user using information passed from yahoo.
        var newUser = new User();

        // Here we're saving information passed to us from yahoo.
        newUser.yahoo.guid = profile.guid;
        newUser.yahoo.accessToken = accessToken;
        newUser.yahoo.email = profile.email;
        newUser.yahoo.firstName = profile.firstName;

        newUser.save(function(err){
          if(err) throw err;
          return done(null, newUser);
        })
      }
    })
  })
