module.exports = (app) => {

  const adminsService = require("../services/admins-service")

  const login = (req, res) => {
    const credentials = req.body
    adminsService.findAdminByCredentials(credentials).then((actualAdmin) => {
      if (actualAdmin) {
        req.session["adminPage"] = actualAdmin
        res.send(actualAdmin)
      } else {
        res.send("0")
      }
    })
  }


  const adminPage = (req, res) => {
    if (req.session["adminPage"] !== undefined && req.session["adminPage"] !== {}) {
      const currentAdmin = req.session["adminPage"]
      res.send(currentAdmin)
    } else {
      res.send("0")
    }
  }

  const logout = (req, res) => {
    req.session["adminPage"] = {}
    const currentAdmin = req.session["adminPage"]
    res.send(currentAdmin)
  }


  const createAdmin = (req, res) => {
    const credentials = req.body
    adminsService.findAdminByUsername(credentials.username).then((actualAdmin) => {
      if (actualAdmin.length > 0) {
        res.send("0")
      } else {
        adminsService.createAdmin(credentials).then((newAdmin) => {
          res.send(newAdmin)
        })
      }
    })
  }



  app.post("/api/admins/logout", logout)
  app.post("/api/admins/login", login)
  app.post("/api/admins/create", createAdmin)
  app.post("/api/admins/admin", adminPage)

  // app.get("/api/users/:id", findUserById)
  // app.get("/api/users", findAllUsers)
}