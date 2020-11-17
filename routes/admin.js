var express = require('express');
var router = express.Router();



router.use(express.static('public'));
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/login');
});

router.get('/login',function(req, res, next) {
  res.render('admin/login');
});

router.get('/ab*cd',function(req, res, next) {
    res.render('admin/login');
  });


module.exports = router;
