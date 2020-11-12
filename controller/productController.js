const productModel = require('../model/productModel');

exports.index = (req, res, next)=>{
    //Get product from model
    const products = productModel.list();
    //Pass data to view to display list of product
    res.render('product/list', {products});
}
