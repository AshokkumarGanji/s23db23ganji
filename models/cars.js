
const { Double } = require("mongodb")
const mongoose = require("mongoose")
const carsSchema = mongoose.Schema({
    // car_model: String,
    // car_year: String,
    // car_price: Number
    // New code added for SS6 in Assignment13
    car_model: {
        type: String,
        required: true
    },
    car_year: {
        type: String,
        required: true
    },
    car_price: {
        type: Number,
        required: true,
        min: 0,
        max: 50000
    }
});
module.exports = mongoose.model("cars", 
carsSchema)