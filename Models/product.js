const path = require('path');
const fs =require('fs');
module.exports = class Product{
    constructor(name,price,desc,imgUrl){
        this.name = name;
        this.price = price;
        this.desc = desc;
        this.imgUrl=imgUrl
    }
     
    save(){
        const filePath = path.join(__dirname,'..','Data','product.json');
        fs.readFile(
            filePath,
            (err,fileData)=>{
                let products =[];
                if(!err){
                    
                    products = JSON.parse(fileData);
                }
                console.log(products)
                products.push(this);
                fs.writeFile(
                    filePath,
                    JSON.stringify(products),
                    (err)=>{
                        console.log(err);
                    }
                )
            }

        )
    }

    static getAllProducts(cb){
        const filePath = path.join(__dirname,'..','data','product.json');
        fs.readFile(
            filePath,
            (err,fileData)=>{
                let products =[];
                if(!err){
                    products = JSON.parse(fileData);
                }
                cb(products);
            }
        )
    }
}