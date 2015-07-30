var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
    var title = 'Penny Pincher';
    res.render('index', { title: title });
});

// /* GET privacy page. */
router.get('/privacy', function(req, res, next) {
    var title = 'Privacy';
    res.render('privacy', { title: title });
});

/* GET terms of service page. */
router.get('/tos', function(req, res, next) {
    var title = 'Terms of Service';
    res.render('tos', { title: title });
});

/* GET support page. */
router.get('/support', function(req, res, next) {
    var title = 'Support';
    res.render('support', { title: title });
});

/* GET search results page. */
router.get('/search', function(req, res, next) {
    var title = 'Results';
    var yelp = require("yelp").createClient({
        consumer_key        : "7jcglOo2SxF1laGI5iG8ow",
        consumer_secret     : "Hex0_XLTxe-Hem8CTXMS1KFXRrw",
        token               : "7zFN8ztVIXXw5Z16y3dhXvirWf-_O2pD",
        token_secret        : "124GcqDYRmUtzF-Tf9EtQseRoOo"
    });
    
    yelp.search({
        term                : "restaurants", 
        location            : "Orlando", 
        deals_filter        : true, 
        limit               : 12
        
    }, function(error, data) {
        console.log(error);
        console.log(data);
        
        res.render('search', { 
            title           : title, 
            data            : data 
        });
    });
});

module.exports = router;