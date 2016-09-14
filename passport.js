var passport = require("passport");

var Local = require("passport-local");

var query = require('./database/query');

passport.use(new Local(function(email, password, done) {
  var verified; // look up in db
  if(!verified) {
    // Redirect
    done(null, false);
  }

  var user;
  done(null, user);
}));

passport.serializeUser(function(user, done) {
  done(null, user.email);
});

passport.deserializeUser(function(email, done) {
  var user; // Find user

  done(null, user);
});

module.exports = passport;
