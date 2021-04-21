const mongoose = require("mongoose")

const reviewsSchema = mongoose.Schema(
    {
      content: String,
      creator: {type:String, ref: "UsersModel"},
      drink: {type:String, ref: "DrinksModel"},
      createdTime: {type : Date, default: Date.now}
    }, {collection: "reviews"}
)

module.exports = reviewsSchema