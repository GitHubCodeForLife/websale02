var express = require('express');
var router = express.Router();

router.use(express.static('public'));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user/login');
});

router.get('/login',function(req, res, next) {
  res.render('user/login');
});
router.get('/register',function(req, res, next) {
  res.render('user/register');
});
//How to difference between get and use


module.exports = router;
