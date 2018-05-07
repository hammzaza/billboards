var Songs = require('../schemas/songs');
module.exports = function(app,passport){
    app.post('/uploadsong',function(req,res){
        var song = new Songs();
        song.name = req.body.name;
        song.genre = req.body.genre;
        song.description = req.body.description;
        song.tags = req.body.tags;
        songs.uploadlink = req.body.link;
        songs.save(function(err) {
            if (err)
                throw err;
            res.send({success:'sucessfully sent'});
        });
    });
};