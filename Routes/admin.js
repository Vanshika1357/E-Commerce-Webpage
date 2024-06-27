const path = require('path');
const express = require('express');
const router = express.Router();
const getProductList = require('../Controllers/admin').getProductList
const postAddTask = require('../Controllers/admin').postAddTask
const getAddProduct = require('../Controllers/admin').getAddProduct;
router.get('/productList',getProductList)
router.post('/addTask',postAddTask)
router.get('/addProduct',getAddProduct);


module.exports.router=router;
