const products =[];
const Product = require('../Models/product');
module.exports.getProductList = (req,res,next)=>{
    Product.getAllProducts((products)=>{
        res.render('./Admin/productList',{
            path : '/admin/productList',
            products,
            length : products.length>0
        })
    })
    
}
module.exports.postAddTask = (req,res)=>{
    //  let product ={
    //     productName : req.body.productName,
    //     price : req.body.price,
    //     imgUrl : req.body.imgUrl,
    //     desc : req.body.desc
    // }
    
    // products.push(product);



    let newProduct = new Product(
        req.body.productName,
        req.body.price,
        req.body.desc,
        req.body.imgUrl
    );


   
    newProduct.save();
    res.redirect('/')
};
module.exports.getAddProduct = (req,res)=>{
    res.render('./Admin/addProduct');
}
// module.exports.products=products;
