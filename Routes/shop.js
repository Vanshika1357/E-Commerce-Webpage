const path = require('path');
const express = require('express');
const router = express.Router();
// const products = require('./admin').products;
const get = require('../Controllers/shop').get;
router.get('/',get)




module.exports=router;