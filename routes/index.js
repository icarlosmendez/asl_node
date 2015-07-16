var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // var yelp = require("yelp").createClient({
    //     consumer_key        : "7jcglOo2SxF1laGI5iG8ow",
    //     consumer_secret     : "Hex0_XLTxe-Hem8CTXMS1KFXRrw",
    //     token               : "7zFN8ztVIXXw5Z16y3dhXvirWf-_O2pD",
    //     token_secret        : "124GcqDYRmUtzF-Tf9EtQseRoOo"
    // }); 
    // console.log("The yelp connection variable has been created");
    
    res.render('index', { title: 'Penny Pincher' });
    alert("render has been called");
    
    // app.on('connection', function(data) {
    //     alert("Inside the Connection function");
        
    //     var yelpData = yelp.search({term: "restaurants", location: data.city, deals_filter: true, limit: 9}, function(error, data){
    //         return yelpData;
    //     });
    //     console.log("This is the yelp object " + yelpData);
  
    // });
});

router.get('/welcome', function(req, res, next) {
  res.render('welcome', { title: 'Welcome' });
});

router.get('/search', function(req, res, next) {
  res.render('search', { title: 'Search' });
});

router.get('/privacy', function(req, res, next) {
  res.render('privacy', { title: 'Privacy' });
});

router.get('/tos', function(req, res, next) {
  res.render('tos', { title: 'Terms of Service' });
});

router.get('/support', function(req, res, next) {
  res.render('support', { title: 'Support' });
});

module.exports = router;