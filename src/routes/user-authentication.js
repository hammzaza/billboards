module.exports = function(app,passport){
    app.get('/sign-in',function(req,res){
        res.render('sign-in.ejs');
    });
    app.get('/sign-up',function(req,res){
        res.render('create-account.ejs');
    });
    app.post('/sign-up-user', passport.authenticate('user-signup', {
        successRedirect : '/',
        failureRedirect : '/',
        failureFlash : true
    }));
};