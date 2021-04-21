const mongoose = require("mongoose")
const drinksSchema = require("./drinks-schema")

const drinksModel = mongoose.model(
    "DrinksModel",
    drinksSchema
)

module.exports = drinksModel