const mongoose = require("mongoose")

const drinksSchema = mongoose.Schema(
    {
      strDrink: String,
      strTags: String,
      strCategory: String,
      strAlcoholic: Boolean,
      strGlass: String,
      strInstructions: String,
      strIngredients: String,
      strDrinkThumb: String,
      creator: {type: String, ref: 'UsersModel'}
    }, {collection: "drinks"}
)

module.exports = drinksSchema