var Songs = require('../schemas/songs');
var ObjectId = require('mongodb').ObjectID;
var str = require('string');
module.exports = function(app){
    app.get('/',function(req,res){
        Songs.find({},function(err,results){
            songs = {};
            if(err)
                throw err;
            if(results == null)
                songs = new Songs();
            else
                songs = results;
            res.render('index.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
        
    });
    app.get('/upload',function(req,res){
        res.render('upload.ejs',{check:checkuser(req.user),username:username(req.user)});
    });
    app.get('/songs/:id',function(req,res){
        id = new ObjectId(req.params.id);
        Songs.findById(id,function(err,result){
            if(err)
                throw err;
            res.render('songlink.ejs',{song:result});
        });
        
    });
    app.post('/search',function(req,res){
        query = req.body.query;
        Songs.find({},function(err,results){
            songs = {};
            if(err)
                throw err;
            if(results == null)
                songs = new Songs();
            else
                songs = results;
               
            song = songs.filter(word => str(word).contains(query));
            res.render('index.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
        });
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