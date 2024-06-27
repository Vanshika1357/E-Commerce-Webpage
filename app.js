const express = require('express');
const app = express();
const PORT =4444;
const path = require('path');
const hbs = require('hbs')
app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})
hbs.registerPartials(path.join(__dirname,'/views/partials'));
app.use(express.static(path.join(__dirname,'static')))
app.use(express.urlencoded({extended:true}));
app.set('view engine','hbs'); 

const adminRoute = require('./Routes/admin').router;
const shopRoute = require('./Routes/shop')
app.use('/admin',adminRoute)
app.use('/',shopRoute) 