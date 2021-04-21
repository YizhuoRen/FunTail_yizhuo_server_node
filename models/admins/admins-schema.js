const mongoose = require("mongoose")

const adminsSchema = mongoose.Schema(
    {
      username: String,
      password: String,
      role: {type: String, enum: ["ADMIN", "SUPER-ADMIN"]},
      email: String,
      address: String,
    }, {collection: "admins"}
)

module.exports = adminsSchema