module.exports = function(app){
    app.get('/home',function(req,res){
        res.render('index.ejs');
    });

};