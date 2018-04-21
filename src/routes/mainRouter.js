module.exports = function(app){
    app.get('/home',function(req,res){
        res.render('index.ejs',{check:checkuser(req.user),username:username(req.user)});
    });

};
function checkuser(s){
    if(s)
        return true
    else
        return false
}
function username(s){
    if (s)
        return s.firstName
    else
        return 'Profile'
}