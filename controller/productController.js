const productModel = require('../model/mode');
//import list from '../model/productModel';

exports.index = (req, res, next)=>{
    //Get product from model
    //console.log(productModel.list);
    const products = productModel.list();
    //Take 9 imtems
    //console.log(products.drinks);
    const drinks = products.drinks;
    const foods = products.foods;
    const desserts= products.desserts;
    //const products  = list;
    //console.log(products);
    //Pass data to view to display list of product
    res.render('product/list', {products,foods, drinks, desserts});
}


