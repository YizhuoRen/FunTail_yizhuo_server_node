const reviewsDao = require("../daos/reviews-dao")

const createReview = (review) => {
  return reviewsDao.createReview(review)
}


const findReviewsForDrink = (drinkId) => {
  return reviewsDao.findReviewsForDrink(drinkId)
}

const deleteReviewByCreator = (userId) => {
  return reviewsDao.deleteReviewByCreator(userId)
}

const findReviewsByCreator = (userId) => {
  return reviewsDao.findReviewsByCreator(userId)
}

const deleteReview = (reviewId) => {
  return reviewsDao.deleteReview(reviewId)
}

const deleteReviewsOfDrink = (drinkId) => {
  return reviewsDao.deleteReviewsOfDrink(drinkId)
}

module.exports = {
  createReview,
  findReviewsForDrink,
  findReviewsByCreator,
  deleteReview,
  deleteReviewByCreator,
  deleteReviewsOfDrink
}



