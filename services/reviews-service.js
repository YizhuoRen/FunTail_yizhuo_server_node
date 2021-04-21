const reviewsDao = require("../daos/reviews-dao")

const createReview = (review) => {
  return reviewsDao.createReview(review)
}


const findReviewsForDrink = (drinkId) => {
  return reviewsDao.findReviewsForDrink(drinkId)
}

const findReviewsByCreator = (userId) => {
  return reviewsDao.findReviewsByCreator(userId)
}

const deleteReview = (reviewId) => {
  return reviewsDao.deleteReview(reviewId)
}

module.exports = {
  createReview,
  findReviewsForDrink,
  findReviewsByCreator,
  deleteReview

}



