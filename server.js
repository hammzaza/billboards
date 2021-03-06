var express = require('express');
var ejs = require('ejs');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
var app = express();
var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: 'billboardss' }));
app.use(passport.initialize());
app.use(passport.session());
app.set('view-engine', '.ejs');
app.set('views', 'src/views');
var configDB = require('./src/config/mongodb');
mongoose.connect(configDB);
require('./src/config/passport')(passport);
require('./src/routes/mainRouter')(app);
require('./src/routes/user-authentication')(app,passport);
require('./src/routes/upload')(app,passport);
require('./src/routes/categories')(app);
require('./src/routes/profile')(app);
app.listen(port, function () {
    console.log("Listening on port " + port);
});