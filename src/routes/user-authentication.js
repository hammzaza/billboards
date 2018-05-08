module.exports = function(app,passport){
    app.get('/sign-in',function(req,res){
        if(checkuser(req.user))
            res.redirect('/');
        res.render('sign-in.ejs');
    });
    app.get('/sign-up',function(req,res){
        res.render('create-account.ejs');
    });
    app.post('/sign-up-user', passport.authenticate('user-signup', {
        successRedirect : '/sign-in',
        failureRedirect : '/sign-up',
    }));
    app.post('/sign-in-user', passport.authenticate('user-login', {
        successRedirect : '/home',
        failureRedirect : '/sign-in',
    }));
};
function checkuser(s){
    if(s)
        return true;
    else
        return false;
}