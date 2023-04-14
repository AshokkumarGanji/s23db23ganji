var express = require('express');
var router = express.Router();

const cars_controlers= require('../controllers/cars');
/* GET home page. */
router.get('/', cars_controlers.cars_view_all_Page);
module.exports = router;
