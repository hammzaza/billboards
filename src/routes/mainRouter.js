module.exports = function(app){
    app.get('/',function(req,res){
        res.render('index.ejs',{check:checkuser(req.user),username:username(req.user)});
    });
    app.get('/upload',function(req,res){
        res.render('upload.ejs',{check:checkuser(req.user),username:username(req.user)});
    });
};
function checkuser(s){
    if(s)
        return true;
    else
        return false;
}
function username(s){
    if (s)
        return s.firstName;
    else
        return 'Profile';
}