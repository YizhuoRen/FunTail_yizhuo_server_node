const drinksModel = require("../models/drinks/drinks-model")

const findDrinksByCreator = (userId) => {
  return drinksModel.find({creator: userId}).sort({_id:-1});
}

const findDrinkById = (id) => {
  return drinksModel.findById(id)
}

const findDrinksByName = (name) => {
  return drinksModel.find({strDrink: name})
}

const findAllDrinks = () => {
  return drinksModel.find()
}

const createDrink = (drink) => {
  return drinksModel.create(drink)
}

const deleteDrink = (drinkId) => {
  return drinksModel.deleteOne({_id: drinkId})
}


const findDrinksOfRecent = () => {
  return drinksModel.find().sort({_id:-1}).limit(15);
}

module.exports = {
  findDrinksByCreator,
  findAllDrinks,
  findDrinksByName,
  createDrink,
  deleteDrink,
  findDrinkById,
  findDrinksOfRecent
}