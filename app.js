var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;


//YELP SHIT
//ANYTHING YOU WANT TO SHOW ON THE RESULTS PAGE (PROCESS) DATA
app.get("/",function(req,res) {
    var yelp = require("yelp").createClient({
        consumer_key        : "7jcglOo2SxF1laGI5iG8ow",
        consumer_secret     : "Hex0_XLTxe-Hem8CTXMS1KFXRrw",
        token               : "7zFN8ztVIXXw5Z16y3dhXvirWf-_O2pD",
        token_secret        : "124GcqDYRmUtzF-Tf9EtQseRoOo"
    });

    res.render("./bin/www");

    app.on('connection', function(data) {
        yelp.search({term: "restaurants", location: data['city'], deals_filter: true, limit: 9});
  
    });
});