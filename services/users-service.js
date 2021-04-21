const usersDao = require("../daos/users-dao")

const findUserByCredentials = (credentials) => {
   return usersDao.findUserByCredentials(credentials)
}

const findAllUsers = () => {
  return usersDao.findAllUsers()
}

const findUserByUsername = (username) => {
  return usersDao.findUserByUsername(username)
}

const createUser = (user) => {
   return usersDao.createUser(user)
}

const findUserById = (id) => {
  return usersDao.findUserById(id)
}

const findRecentNewUsers = () => {
  return usersDao.findRecentNewUsers()
}

const updateProfile = (user) => {
  return usersDao.updateProfile(user)
}

const follow = (userVisitedId, currentUserId) => {
  return usersDao.follow(userVisitedId, currentUserId)
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
