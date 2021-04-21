const mongoose = require("mongoose")
const adminsSchema = require("./admins-schema")

const adminsModel = mongoose.model(
    "AdminsModel",
    adminsSchema
)

module.exports = adminsModel