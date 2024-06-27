// const products = require('./admin').products;

const Product = require('../Models/product');

module.exports.get = (req,res)=>{
    // console.log(products)
    Product.getAllProducts((products)=>{
        res.render('./Shop/shop',{
            path :'/',
            products,
            length : products.length>0
        })
    })
}