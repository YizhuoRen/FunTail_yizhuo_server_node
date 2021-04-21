const mongoose = require("mongoose")

const usersSchema = mongoose.Schema(
    {
      username: String,
      password: String,
      role: {type: String, enum: ["USER"]},
      email: String,
      address: String,
      photoAddress: {type: String, default: "https://i.pinimg.com/564x/4e/1c/d4/4e1cd42597f64a7cec2e97c387c47a65.jpg"},
      following: [{type: String, ref: 'UsersModel'}],
      followers: [{type: String, ref: 'UsersModel'}],
    }, {collection: "users"}
)

module.exports = usersSchema