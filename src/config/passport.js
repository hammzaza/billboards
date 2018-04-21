var LocalStrategy   = require('passport-local').Strategy;
var User = require('../schemas/user');
module.exports = function(passport) {
    passport.use('user-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {
        process.nextTick(function() {
        User.findOne({ 'name' :  name }, function(err, user) {
            if (err)
                return done(err);
            if (!user){
                var newUser = new User();
                newUser.username = req.body.uname;
                newUser.password = User.generateHash(password);
                newUser.email = email;
                newUser.firstName = req.body.fname;
                newUser.lastName = req.body.lname;
                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }
        });    

        });

    }));
};