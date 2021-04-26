const mongoose = require("mongoose")
const webApiDrinksSchema = require("./web-api-drinks-schema")

const webApiDrinksModel = mongoose.model(
    "WebApiDrinksModel",
    webApiDrinksSchema
)

module.exports = webApiDrinksModel