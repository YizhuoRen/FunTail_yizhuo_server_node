const usersModel = require("../models/users/users-model")

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
  return usersModel.findById(userId)
}


module.exports = {
  findAllUsers,
  createUser,
  findUserById,
  findUserByUsername,
  findUserByCredentials
}