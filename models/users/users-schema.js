const mongoose = require("mongoose")

const usersSchema = mongoose.Schema(
    {
      username: String,
      password: String,
      role: {type: String, enum: ["ADMIN", "USER"]},
      email: String,
      address: String,
      following: {type: String, ref: 'UsersModel'},
      followers: {type: String, ref: 'UsersModel'},
    }, {collection: "users"}
)

module.exports = usersSchema