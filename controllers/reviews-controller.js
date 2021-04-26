module.exports = (app) => {

  const reviewsService = require("../services/reviews-service")

  const findAllReviews = (req, res) => {

  }

  const findReviewsForDrink = (req, res) => {
    const drinkId = req.params.drinkId
    reviewsService.findReviewsForDrink(drinkId).then((reviews) => {
      res.send(reviews)
    })
  }


  const findReviewsByCreator = (req, res) => {
    const userId = req.params.userId
    reviewsService.findReviewsByCreator(userId).then((reviews) => {
      res.send(reviews)
    })
  }



  const updateReview = (req, res) => {

  }

  const createReview = (req, res) => {
    const review = req.body
    reviewsService.createReview(review).then((review) => {
      res.send(review)
    })
  }




  const deleteReview = (req, res) => {
    const reviewId = req.params.reviewId
    reviewsService.deleteReview(reviewId).then((result)=> {
      res.send(result)
    })
  }




  app.post("/api/drinks/:drinkId/review", createReview)
  app.get("/api/reviews/:drinkId", findReviewsForDrink)
  app.get("/api/users/:userId/reviews", findReviewsByCreator)
  app.delete("/api/reviews/:reviewId", deleteReview)

}