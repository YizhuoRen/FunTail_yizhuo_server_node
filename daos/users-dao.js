const usersModel = require("../models/users/users-model");
const mongoose = require("mongoose");

const findUserByUsername = (username) => {
  return usersModel.find({username})
}

const findUserByCredentials = (credentials) => {
  return usersModel.findOne({username: credentials.username,
  password: credentials.password})
}

const findAllUsers = () => {
  return usersModel.find()
}

const createUser = (user) => {
  return usersModel.create(user)
}

const findUserById = (userId) => {
  return usersModel.findById(userId).populate("following").
  populate("followers").exec()
}

const findRecentNewUsers = () => {
  return usersModel.find().sort({_id:-1}).limit(10);
}

const updateProfile = (user) => {
  return usersModel.replaceOne({_id: user._id},user)
}

const follow = (userVisitedId, currentUserId) => {
  return usersModel.updateOne({_id: userVisitedId},
      {$push: {followers: currentUserId}}).then(() =>
      usersModel.updateOne({_id: currentUserId},
          {$push: {following: userVisitedId}})
  )
}


module.exports = {
  findAllUsers,
  createUser,
  findUserById,
  findUserByUsername,
  findUserByCredentials,
  findRecentNewUsers,
  updateProfile,
  follow
}