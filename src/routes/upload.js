var Objectid = require('mongodb').ObjectID;
var Songs = require('../schemas/songs');
var async= require('async');
var Songs = require('../schemas/songs');
module.exports = function(app,passport){
    app.post('/uploadsong',isLoggedIn,function(req,res){
        var song = new Songs();
        song.uploader = req.user.username;
        song.name = req.body.name;
        song.genre = req.body.genre;
        song.description = req.body.description;
        song.tags = req.body.tags;
        link = "/songs/"+req.body.link;
        song.uploadlink = link;
        console.log(song.uploadlink);
        song.views = 0;
        song.save(function(err) {
            if (err)
                throw err;
            res.send({success:'sucessfully sent'});
        });
    });
    app.put('/voteup/:id',function(req,res){
        var id = new Objectid(req.params.id);
        async.waterfall([
            function (callback) {
                Songs.findById(id,function(err,result){
                    if (err)
                        callback(err);
                    callback(null,result);
                });
            },
            function(user,callback){
                Songs.updateOne({_id:id},{views: user.views+1},function(err,success){
                    if(err)
                        callback(err);
                    else
                        callback(null,success);
                });
            }
        ]);
    });
    app.put('/votedown/:id',function(req,res){
        var id = new Objectid(req.params.id);
        async.waterfall([
            function (callback) {
                Songs.findById(id,function(err,result){
                    if (err)
                        callback(err);
                    callback(null,result);
                });
            },
            function(user,callback){
                Songs.updateOne({_id:id},{views: user.views-1},function(err,success){
                    if(err)
                        callback(err);
                    else
                        callback(null,success);
                });
            }
        ]);
    });
};
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    else
        res.redirect('/');
}