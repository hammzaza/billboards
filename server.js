var express = require('express');
var ejs = require('ejs');
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var app = express();
var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(session({ secret: 'billboardss' }));
app.use(passport.initialize());
app.use(passport.session());

app.set('view-engine', '.ejs');
app.set('views', 'src/views');

require('./src/routes/mainRouter')(app);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, function () {
    console.log("Listening on port " + port);
});