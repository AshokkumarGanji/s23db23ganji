const mongoose = require("mongoose")
const carsSchema = mongoose.Schema({
    car_model: String,
    car_year: String,
    car_price: Number
})
module.exports = mongoose.model("cars", 
carsSchema)