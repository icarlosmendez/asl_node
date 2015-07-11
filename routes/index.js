var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Penny Pincher' });
});

router.get('/privacy', function(req, res, next) {
  res.render('privacy', { title: 'Privacy' });
});

router.get('/welcome', function(req, res, next) {
  res.render('welcome', { title: 'Welcom' });
});

router.get('/tos', function(req, res, next) {
  res.render('tos', { title: 'Terms of Service' });
});

router.get('/support', function(req, res, next) {
  res.render('support', { title: 'Support' });
});

module.exports = router;
