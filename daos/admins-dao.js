const adminsModel = require("../models/admins/admins-model");




const findAdminByCredentials = (credentials) => {
  return adminsModel.findOne({username: credentials.username,
    password: credentials.password})
}


const createAdmin = (admin) => {
  return adminsModel.create(admin)
}


const findAdminByUsername = (username) => {
  return adminsModel.find({username})
}




module.exports = {
  findAdminByCredentials,
  createAdmin,
  findAdminByUsername
}