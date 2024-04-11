const mongoose = require("mongoose")
const CitySchema = mongoose.Schema({
    name: String,
    country :String,
    population :Number
})
module.exports = mongoose.model("City",
CitySchema)