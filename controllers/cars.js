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