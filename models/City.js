const mongoose = require("mongoose")
const CitySchema = mongoose.Schema({
    name: {
        type: String,
        minlength: 1,
        maxlength: 10,
    },
    country: {
        type: String,
        minlength: 1,
        maxlength: 20,
    },
    population: Number
})
module.exports = mongoose.model("City",
    CitySchema)