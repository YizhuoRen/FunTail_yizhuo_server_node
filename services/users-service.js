const usersDao = require("../daos/users-dao")

const findUserByCredentials = (credentials) => {
   return usersDao.findUserByCredentials(credentials)
}

const findAllUsers = () => {
  return usersDao.findAllUsers()
}



const createUser = (user) => {
   return usersDao.createUser(user)
}

const findUserById = (id) => {
  return usersDao.findUserById(id)
}

const deleteUser = (id) => {
  return usersDao.deleteUser(id)
}



const findUserByName = (username) => {
  return usersDao.findUserByName(username)
}

const findUserByIdNoPopulate = (id) => {
  return usersDao.findUserByIdNoPopulate(id)
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


const unfollow = (userVisitedId, currentUserId) => {
  return usersDao.unfollow(userVisitedId, currentUserId)
}


module.exports = {
  findAllUsers,
  createUser,
  findUserById,
  findUserByCredentials,
  findRecentNewUsers,
  updateProfile,
  follow,
  unfollow,
  findUserByIdNoPopulate,
  findUserByName,
  deleteUser
}
