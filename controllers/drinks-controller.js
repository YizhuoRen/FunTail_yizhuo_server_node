module.exports = (app) => {
  const fetch = require('node-fetch');
  const drinksService = require("../services/drinks-service")
  const reviewsService = require("../services/reviews-service")
  const webApiDrinksModel = require(
      "../models/web-api-drinks/web-api-drinks-model")

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


  const createDrink = (req, res) => {
    const drink = req.body
    drinksService.createDrink(drink).then((drink) => {
      res.send(drink)
    })
  }

  const findDrinkById = (req, res) => {
    const drinkId = req.params.drinkId
    webApiDrinksModel.findOne({idDrink: drinkId}).then(aDrink => {
      if (aDrink !== null) {
        res.send(aDrink)
      } else {
        drinksService.findDrinkById(drinkId).then((drink) => {
          res.send(drink)
        })
      }
    })
  }


const findDrinkByName = (req, res) => {
  const drinkName = req.body.drinkName
  drinksService.findDrinksByName(drinkName).then((drinks) => {
    res.send(drinks)
  })
}

const findTotalDrinkByName = (req, res) => {
  const drinkName = req.params.drinkName
  webApiDrinksModel.deleteMany({}).then(() =>
      drinksService.findDrinksByName(drinkName).then((drinks) => {
        fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`).then(
            response => response.json()).then(
            drinksObject => {
                if (drinksObject.drinks !==null && drinksObject.drinks.length> 0) {drinksObject.drinks.map((drink) => {
              webApiDrinksModel.create(drink);
              drinks.push(drink)
            });}}).then(() => res.send(drinks))
      })
  )
  // drinksService.findDrinksByName(drinkName).then((drinks)=> {
  //   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`).
  //   then(response => response.json()).then(drinksObject =>
  //     drinks.push(drink)
  //   )
  //   res.send(drinks)
  // })

}

const findDrinksOfRecent = (req, res) => {
  drinksService.findDrinksOfRecent().then((drinks) => {
    res.send(drinks)
  })
}

const deleteDrink = (req, res) => {
  const drinkId = req.params.drinkId
  reviewsService.deleteReviewsOfDrink(drinkId).then(() => {
  })
  drinksService.deleteDrink(drinkId).then((result) => {
    res.send(result)
  })
}

const updateDrink = (req, res) => {
  const updatedDrink = req.body
  drinksService.updateDrink(updatedDrink).then((result) => {
    res.send(result)
  })
}

app.post("/api/drinks/:userId/drink", createDrink)
app.get("/api/users/:userId/drinks", findDrinksByCreator)
app.get("/api/drinks", findAllDrinks)
app.post("/api/drinks/:drinkId", findDrinkById)
app.post("/api/drinks", findDrinksOfRecent)
app.post("/api/drinks/name/:name", findDrinkByName)
app.delete("/api/drinks/:drinkId", deleteDrink)
app.put("/api/drinks/:drinkId", updateDrink)
app.post("/api/totalDrinks/name/:drinkName", findTotalDrinkByName)

// app.delete("/api/drinks/:drinkId", deleteDrink)
}




