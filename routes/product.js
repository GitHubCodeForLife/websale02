const express= require('express');
const router = express.Router();
const productController = require('../controller/productController');
const productDetailController = require('../controller/productDetailController');

router.use(express.static('public'));

router.get('/',productController.index);
//Get more detail in list product 
router.get('/:type.:product',productDetailController.index);

module.exports = router;