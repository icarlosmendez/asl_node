var express = require('express');
var router = express.Router();

var yelp = require("yelp").createClient({
    consumer_key        : "7jcglOo2SxF1laGI5iG8ow",
    consumer_secret     : "Hex0_XLTxe-Hem8CTXMS1KFXRrw",
    token               : "7zFN8ztVIXXw5Z16y3dhXvirWf-_O2pD",
    token_secret        : "124GcqDYRmUtzF-Tf9EtQseRoOo"
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Penny Pincher' });
});

router.get('/welcome', function(req, res, next) {
  res.render('welcome', { title: 'Welcome' });
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

router.get('/search', function(req, res, next) {
    
     yelp.search({term: "food", location: "Montreal"}, function(error, data) {
    console.log(error);
        
          res.render('search', { title: 'Search', data: data });
    });
    
});

module.exports = router;