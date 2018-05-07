'use strict';

var LocalStrategy = require('passport-local').Strategy;
var User = require('../schemas/user');
var apollo = require('express-graphql').apollo;
var queries = require('../graphql/queries').queries;
module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });
    passport.use('user-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, email, password, done) {
        process.nextTick(function () {
            User.findOne({ 'email': email }, function (err, user) {
                if (err) return done(err);
                if (!user) {
                    var newUser = new User();
                    newUser.username = req.body.uname;
                    newUser.password = newUser.generateHash(password);
                    newUser.email = email;
                    newUser.firstName = req.body.fname;
                    newUser.lastName = req.body.lname;
                    newUser.save(function (err) {
                        if (err) throw err;
                        return done(null, newUser);
                    });
                }
            });
        });
    }));
    passport.use('user-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, email, password, done) {
        getUsers();
        // User.findOne({ 'email' :  email }, function(err, user) {
        //     if (err)
        //         return done(err);
        //     if (!user)
        //         return done(null, false, req.flash('loginMessage', 'No user found.'));

        //     if (!user.validPassword(password))
        //         return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
        //     return done(null, user);
        // });
    }));
};
function getUsers() {
    var _this = this;

    this.apollo.mutate({
        mutation: Query.updateUser,
        variables: {
            id: this.user.id,
            name: user
        },
        update: function update(proxy, _ref) {
            var getUser = _ref.data.getUser;

            // Read the data from our cache for this query.
            var data = proxy.readQuery({ query: Query.Users });

            var index = data.users.map(function (x) {
                return x.id;
            }).indexOf(_this.user.id);

            data.users[index].name = user;

            // Write our data back to the cache.
            proxy.writeQuery({ query: Query.Users, data: data });
        }
    }).subscribe(function (_ref2) {
        var data = _ref2.data;

        _this.closeFirstModal();
    }, function (error) {
        console.log('there was an error sending the query', error);
    });
}