const drinksDao = require("../daos/drinks-dao")

const findDrinksByCreator = (userId) => {
  return drinksDao.findDrinksByCreator(userId);
}


const findDrinkById = (id) => {
  return drinksDao.findDrinkById(id);
}

const findDrinksByName = (name) => {
  return drinksDao.findDrinksByName(name);
}

const findAllDrinks = () => {
  return drinksDao.findAllDrinks();
}

const createDrink = (drink) => {
  return drinksDao.createDrink(drink);
}

const deleteDrink = (drinkId) => {
  return drinksDao.deleteDrink(drinkId)
}

const updateDrink = (updatedDrink) => {
  return drinksDao.updateDrink(updatedDrink)
}

const findDrinksOfRecent = () => {
  return drinksDao.findDrinksOfRecent()
}

const deleteDrinkByCreator = (userId) => {
  return drinksDao.deleteDrinkByCreator(userId)
}





module.exports = {
  findDrinksByCreator,
  findAllDrinks,
  findDrinksByName,
  createDrink,
  findDrinkById,
  findDrinksOfRecent,
  deleteDrink,
  deleteDrinkByCreator,
  findDrinksByName,
  updateDrink
}