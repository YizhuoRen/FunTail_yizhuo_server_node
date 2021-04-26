const usersModel = require("../models/users/users-model");
const mongoose = require("mongoose");

const findUserByName = (username) => {
  return usersModel.find({username: {"$regex": username, "$options": "i"}})
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

const deleteUser = (userId) => {
  return usersModel.findByIdAndRemove(userId)
}


const findUserByIdNoPopulate = (userId) => {
  return usersModel.findById(userId)
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


const unfollow = (userVisitedId, currentUserId) => {
  return usersModel.updateOne({_id: userVisitedId},
      {$pull: {followers: currentUserId}}).then(() =>
      usersModel.updateOne({_id: currentUserId},
          {$pull: {following: userVisitedId}})
  )
}





module.exports = {
  findAllUsers,
  createUser,
  findUserById,
  findUserByName,
  findUserByCredentials,
  findRecentNewUsers,
  updateProfile,
  follow,
  unfollow,
  findUserByIdNoPopulate,
  deleteUser
}