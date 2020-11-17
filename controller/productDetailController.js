const productModel = require('../model/mode');

exports.index = (req, res, next)=>{
    //Get name product 
    let type = req.params.type;
    let productName = req.params.product;

    //console.log(type, product);

    //console.log(nameProduct);
    //Get product from model
    const products = productModel.list();
    //const foods = product.foods;
    const drinks = products.drinks;
    const foods = products.foods;
    const desserts= products.desserts;
    
    let  product;
    //Phan loai
    if(type=="foods"){
        //Tim san pham
        for(i =0;i<foods.length;i++){
            if(foods[i].title==productName)
                product = foods[i];
        }
        res.render('product/detailFood',{product, foods, desserts});

    }else if(type=="drinks"){
        for(i =0;i<drinks.length;i++){
            if(drinks[i].title==productName)
                product = drinks[i];
        }
        res.render('product/detailDrink',{product, drinks, desserts});

    }else{
        for(i =0;i<desserts.length;i++){
            if(desserts[i].title==productName)
                product = desserts[i];
        }
        res.render('product/detailDessert',{product, foods, desserts});
    }



}
