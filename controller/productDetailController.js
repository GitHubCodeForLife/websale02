const productModel = require('../model/productModel');

exports.index = (req, res, next)=>{
    //Get name product 
    let nameProduct = req.params.product;
    //console.log(nameProduct);
    //Get product from model
    const products = productModel.list();
    //Find product to view
    for(let i =0;i<products.length;i++){
        console.log(products[i].title);
        if(products[i].title==nameProduct){
            let product = products[i];
            res.render('product/detail', {products,product});
            return;
        }
    }

}
