var express = require ('express');
var mainRouter = express.Router();

mainRouter.get('/', function(req, res){
    res.render('index.ejs');
});

module.exports = mainRouter;