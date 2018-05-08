module.exports = function(app){
    app.get('/profile',isLoggedIn,function(req,res){
        res.render('profile.ejs',{check:true,username:req.user.firstName});
    });
    app.get('/settings',isLoggedIn,function(req,res){
        res.render('profile.ejs',{check:true,username:req.user.firstName});
    });
};
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    else
        res.redirect('/');
}