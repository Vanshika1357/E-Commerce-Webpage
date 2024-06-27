const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'shopingcart',
    password: 'Vg@19.05'
    
  });

  
module.exports=pool.promise();