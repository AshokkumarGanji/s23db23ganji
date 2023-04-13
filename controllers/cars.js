var cars = require('../models/cars');
   
exports.cars_list = function(req, res) {
 res.send('NOT IMPLEMENTED: cars list');
};
// for a specific cars.
exports.cars_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: cars detail: ' + req.params.id);
};
// Handle cars create on POST.
exports.cars_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: cars create POST');
};
// Handle cars delete form on DELETE.
exports.cars_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: cars delete DELETE ' + req.params.id);
};
// Handle cars update form on PUT.
exports.cars_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: cars update PUT' + req.params.id);
};
// List of all cars
exports.cars_list = async function(req, res) {
    try{
    theCars = await cars.find();
    res.send(theCars);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
   // VIEWS
// Handle a show all view
exports.cars_view_all_Page = async function(req, res) {
    try{
    theCars = await cars.find();
    res.render('cars', { title: 'cars Search Results', results: theCars });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
   // Handle Costume create on POST.
exports.cars_create_post = async function(req, res) {
 console.log(req.body)
 let document = new cars();
 // We are looking for a body, since POST does not have query parameters.
 // Even though bodies can be in many different formats, we will be picky
 // and require that it be a json object
 // {"car_model":"Audi", "car_year":2023, "car_price":10000}
 document.car_model = req.body.car_model;
 document.car_year = req.body.car_year;
 document.car_price = req.body.car_price;
 try{
 let result = await document.save();
 res.send(result);
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 } 
};