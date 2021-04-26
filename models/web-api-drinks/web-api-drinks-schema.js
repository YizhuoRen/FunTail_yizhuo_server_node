const mongoose = require("mongoose")

const webApiDrinksSchema = mongoose.Schema(
    {
          idDrink: String,
      strDrink: String,
      strTags: String,
      strCategory: String,
      strAlcoholic: String,
      strGlass: String,
      strInstructions: String,
      strIngredients: String,
      strDrinkThumb: String,
    }, {collection: "webApiDrinks"}
)

module.exports = webApiDrinksSchema