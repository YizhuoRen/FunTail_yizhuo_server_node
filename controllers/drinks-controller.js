module.exports = (app) => {

  const drinksService = require("../services/drinks-service")

  const findAllDrinks = (req, res) => {
    drinksService.findAllDrinks().then((drinks) => {
      res.send(drinks)
    })
  }

  const findDrinksByCreator = (req, res) => {
    const userId = req.params.userId
    drinksService.findDrinksByCreator(userId).then((drinks) => {
      res.send(drinks)
    })
  }

  const findDrinksByName = (req, res) => {
    const name = req.params.name
    drinksService.findDrinksByName(name).then((drinks) => {
      res.send(drinks)
    })
  }

  const createDrink = (req, res) => {
    const drink = req.body
    drinksService.createDrink(drink).then((drink) => {
      res.send(drink)
    })
  }


  const findDrinkById = (req, res) => {
    const drinkId = req.params.drinkId
    drinksService.findDrinkById(drinkId).then((drink)=> {
      res.send(drink)
    })
  }

  const findDrinksOfRecent = (req, res) => {
    drinksService.findDrinksOfRecent().then((drinks)=> {
      res.send(drinks)
    })
  }


  const deleteDrink = (req, res) => {
    const drinkId = req.params.drinkId
    drinksService.deleteDrink(drinkId).then((result)=> {
      res.send(result)
    })
  }


  deleteDrink

  app.post("/api/users/:id/drink", createDrink)
  app.get("/api/drinks/:name", findDrinksByName)
  app.get("/api/users/:userId/drinks", findDrinksByCreator)
  app.get("/api/drinks", findAllDrinks)
  app.post("/api/drinks/:drinkId", findDrinkById)
  app.post("/api/drinks", findDrinksOfRecent)
  app.delete("/api/drinks/:drinkId", deleteDrink)
}




