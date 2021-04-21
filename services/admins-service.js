const adminsDao = require("../daos/admins-dao")



const findAdminByCredentials = (credentials) => {
  return adminsDao.findAdminByCredentials(credentials)

}

const createAdmin = (admin) => {
  return adminsDao.createAdmin(admin)
}


const findAdminByUsername = (username) => {
  return adminsDao.findAdminByUsername(username)
}



module.exports = {
  findAdminByCredentials,
  createAdmin,
  findAdminByUsername
}