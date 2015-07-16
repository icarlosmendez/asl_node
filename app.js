console.log("app.js is being called");

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');

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

// define file paths as variables for use by express
var routes = require('./routes/index');
var users = require('./routes/users');
var yelp = require('./routes/yelp');

// call the use methods on the variables just defined
app.use('/', routes);
app.use('/users', users);
app.use('/yelp', yelp);

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


// //YELP SHIT
// var yelp = require("node-yelp").createClient({
//     consumer_key        : "7jcglOo2SxF1laGI5iG8ow",
//     consumer_secret     : "Hex0_XLTxe-Hem8CTXMS1KFXRrw",
//     token               : "7zFN8ztVIXXw5Z16y3dhXvirWf-_O2pD",
//     token_secret        : "124GcqDYRmUtzF-Tf9EtQseRoOo"
// }); 

// console.log(yelp.createClient);
// alert("This is a start");

// yelp.search({term: "restaurants", location: window.data.city, deals_filter: true, limit: 9}, function(error, data){
//     console.log(error);
//     console.log(window.data);
// });

// console.log("This is the yelp object " + window.data);

//Tutorial requires
//https://arian.io/how-to-use-yelps-api-with-node/
// var oauthSignature = require('oauth-signature');  
// var n = require('nonce')();  
// var request = require('request');
// var qs = require('querystring');  
// var _ = require('lodash');

// /* Function for yelp call
//  * ------------------------
//  * set_parameters: object with params to search
//  * callback: callback(error, response, body)
//  */
// var request_yelp = function(set_parameters, callback) {
    
//     var  oauth_consumer_key = "7jcglOo2SxF1laGI5iG8ow",
//      consumerSecret = "Hex0_XLTxe-Hem8CTXMS1KFXRrw",
//      oauth_token = "7zFN8ztVIXXw5Z16y3dhXvirWf-_O2pD",
//      tokenSecret = "124GcqDYRmUtzF-Tf9EtQseRoOo";

  /* The type of request */
//   var httpMethod = 'GET';

  /* The url we are using for the request */
//   var url = 'http://api.yelp.com/v2/search';

  /* We can setup default parameters here */
//   var default_parameters = {
//     location: 'San+Francisco',
//     sort: '2'
//   };

  /* We set the require parameters here */
//   var required_parameters = {
//     oauth_consumer_key : process.env.oauth_consumer_key,
//     oauth_token : process.env.oauth_token,
//     oauth_nonce : n(),
//     oauth_timestamp : n().toString().substr(0,10),
//     oauth_signature_method : 'HMAC-SHA1',
//     oauth_version : '1.0'
//   };

  /* We combine all the parameters in order of importance */ 
//   var parameters = _.assign(default_parameters, set_parameters, required_parameters);

  /* We set our secrets here */
//   var consumerSecret = process.env.consumerSecret;
//   var tokenSecret = process.env.tokenSecret;

  /* Then we call Yelp's Oauth 1.0a server, and it returns a signature */
  /* Note: This signature is only good for 300 seconds after the oauth_timestamp */
//   var signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});

  /* We add the signature to the list of paramters */
//   parameters.oauth_signature = signature;

  /* Then we turn the paramters object, to a query string */
//   var paramURL = qs.stringify(parameters);

  /* Add the query string to the url */
//   var apiURL = url+'?'+paramURL;

  /* Then we use request to send make the API Request */
//   request(apiURL, function(error, response, body){
//     return callback(error, response, body);
//   });

// };

module.exports = app;