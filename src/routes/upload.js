var path = require('path');
var Songs = require('../schemas/songs');
module.exports = function(app,passport){
    app.post('/uploadsong',function(req,res){
        var song = new Songs();
        song.uploader = 'Hamza';
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
};
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    else
        res.redirect('/');
}