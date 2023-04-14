var express = require('express');
var router = express.Router();

const cars_controlers= require('../controllers/cars');
/* GET home page. */
router.get('/', cars_controlers.cars_view_all_Page);
router.get('/cars/:id', cars_controlers.cars_detail);

// new code implemented for  SC 2 and 3  of lab12

/* GET cars */
router.get('/',cars_controlers.cars_view_all_Page );
router.get('/cars/:id', cars_controlers.cars_detail); 
/* GET detail cars page */ 
//router.get('/detail',secured, cars_controlers.cars_view_one_Page); 
/* GET create cars page */ 
//router.get('/create',secured, cars_controlers.cars_create_Page); 
/* GET create update page */ 
//router.get('/update',secured, cars_controlers.cars_update_Page); 
/* GET delete cars page */ 
//router.get('/delete',secured, cars_controllers.cars_delete_Page); 

module.exports = router;

