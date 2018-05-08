var Songs = require('../schemas/songs');

module.exports = function(app){
    app.get('/pop',function(req,res){
        //Pop
        //category1
        findsongs('Pop',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category1.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category1.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
        
    });
    app.get('/hip-hop',function(req,res){
        //Hip-hop
        //category2
        findsongs('Hip-hop',function(songs){
            if(songs ==null)
                song = new Songs();
                res.render('category2.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category2.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/old-school-hh',function(req,res){
        //Old School Hip Hop
        //category3
        findsongs('Old School Hip Hop',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category3.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category3.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/trap',function(req,res){
        //Trap
        //category4
        findsongs('Trap',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category4.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category4.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/electro',function(req,res){
        //Electro
        //category5
        findsongs('Electro',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category5.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category5.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/rnb',function(req,res){
        //R&B
        //category6
        findsongs('R&B',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category6.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category6.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/techno',function(req,res){
        //Techno
        //category7
        findsongs('Techno',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category7.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category7.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/dubstep',function(req,res){
        //Dubstep
        //category8
        findsongs('Dubstep',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category8.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category8.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    
    app.get('/acapella',function(req,res){
        //Acapella
        //category9
        findsongs('capella',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category9.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category9.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/tropical',function(req,res){
        //Tropical
        //category10
        findsongs('Tropical',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category10.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category10.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/bass-house',function(req,res){
        //Bass House
        //category11
        findsongs('Bass House',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category11.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category11.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/dance',function(req,res){
        //Dance
        //category12
        findsongs('Dance',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category12.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category12.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/instrumental',function(req,res){
        //Instrumental
        //category13
        findsongs('Instrumental',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category13.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category13.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    
    app.get('/jazz',function(req,res){
    //     Jazz
    //category14
        findsongs('Jazz',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category14.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category14.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/orchestral',function(req,res){
    //  Orchestral
    //category15
        findsongs('Orchestral',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category15.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category15.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/disco',function(req,res){
        //Disco
        //category16
        findsongs('Disco',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category16.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category16.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/heavy-metal',function(req,res){
        //Heavy Metal
        //category17
        findsongs('Heavy Metal',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category17.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category17.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    
    app.get('/classical',function(req,res){
        //Classical
        //category18
        findsongs('Classical',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category18.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category18.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/salsa',function(req,res){
        //Salsa
        //category19
        findsongs('Salsa',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category19.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category19.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/romantic',function(req,res){
        //Romantic
        //category20
        findsongs('Romantic',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category20.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category20.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/funk',function(req,res){
        //Funk
        //category21
        findsongs('Funk',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category21.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category21.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/reggae',function(req,res){
        //Reggae
        //category22
        findsongs('Reggae',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category22.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category22.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/house',function(req,res){
        //House
        //category23
        findsongs('House',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category23.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category23.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/tango',function(req,res){
        //Tango
        //category24
        findsongs('Tango',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category24.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category24.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    
    app.get('/blues',function(req,res){
        //Blues
        //category25
        findsongs('Blues',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category25.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category25.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/punkrock',function(req,res){
        //Punk Rock
        //category26
        findsongs('Punk Rock',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category26.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category27.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/country',function(req,res){
        //Country
        //category27
        findsongs('Country',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category27.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category27.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/alternative',function(req,res){
        //Alternative
        //category28
        findsongs('Alternative',function(songs){
            if(songs == null)
            song = new Songs();
            res.render('category28.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
        res.render('category28.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
    });
    });
    app.get('/gospel',function(req,res){
            //Gospel
            //category29
        findsongs('Gospel',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category29.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category29.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/indie',function(req,res){
            //Indie
            //category30
        findsongs('Indie',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category30.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category30.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/rock',function(req,res){
        //Rock
        //category31
        findsongs('Rock',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category31.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category31.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    
    app.get('/deep-house',function(req,res){
        //Deep House
        //category32
        findsongs('Deep House',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category32.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category32.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/world-reggae',function(req,res){
        //World Reggae
        //category33
        findsongs('World Reggae',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category33.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category33.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/trance',function(req,res){
        //Trance
        //category34
        findsongs('Trance',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category34.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category34.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/soul',function(req,res){
        //Soul
        //category35
        findsongs('Soul',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category35.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category35.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/punk-rock',function(req,res){
        //World Punk Rock
        //category36
        findsongs('World Punk Rock',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category36.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category36.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/drum-bass',function(req,res){
        //Drum'n Bass
        //category37
        findsongs('Drum\'n Bass',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category37.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category37.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/rythem',function(req,res){
        //Rythem
        //category38
        findsongs('Rythem',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category38.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category38.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    
    app.get('/smooth-jazz',function(req,res){
        //Smooth Jazz
        //category39
        findsongs('Smooth Jazz',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category39.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category39.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/meditation',function(req,res){
        //Meditation
        //category40
        findsongs('Meditation',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category40.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category40.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    
    app.get('/opera',function(req,res){
        findsongs('Opera',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category41.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category41.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/chill',function(req,res){
        findsongs('Chill',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category42.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category42.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/sleep',function(req,res){
        findsongs('Sleep',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category43.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category43.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/exercise',function(req,res){
        findsongs('Exercise',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category44.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category44.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/latin',function(req,res){
        findsongs('Latin',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category45.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category45.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    app.get('/audiobook',function(req,res){
        findsongs('AudioBook',function(songs){
            if(songs == null)
                song = new Songs();
                res.render('category46.ejs',{check:checkuser(req.user),username:username(req.user),songs:song});
            res.render('category46.ejs',{check:checkuser(req.user),username:username(req.user),songs:songs});
        });
    });
    
};
function findsongs(query,callback){
    Songs.find({genre:query},function(err,result){
        if(err)
            throw err;
        callback(result); 
    });
}
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

