const drinksModel = require("../models/drinks/drinks-model")

const findDrinksByCreator = (userId) => {
  return drinksModel.find({creator: userId}).sort({_id:-1});
}

const findDrinkById = (id) => {
  return drinksModel.findById(id).populate("creator").exec()
}

const findDrinksByName = (name) => {
  return drinksModel.find({strDrink: {"$regex": name, "$options": "i"}})
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

const updateDrink = (updatedDrink) => {
  return drinksModel.updateOne({_id: updatedDrink._id}, updatedDrink)
}

const findDrinksOfRecent = () => {
  return drinksModel.find().sort({_id:-1}).limit(15);
}

const deleteDrinkByCreator = (userId) => {
  return drinksModel.deleteMany({creator: userId})
}



module.exports = {
  findDrinksByCreator,
  findAllDrinks,
  findDrinksByName,
  createDrink,
  deleteDrink,
  findDrinkById,
  findDrinksOfRecent,
  deleteDrinkByCreator,
  updateDrink
}