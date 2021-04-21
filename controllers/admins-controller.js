module.exports = (app) => {

  const adminsService = require("../services/admins-service")

  const login = (req, res) => {
    const credentials = req.body
    adminsService.findAdminByCredentials(credentials).then((actualAdmin) => {
      if (actualAdmin) {
        req.session["profile"] = actualAdmin
        res.send(actualAdmin)
      } else {
        res.send("0")
      }
    })
  }


  const profile = (req, res) => {
    if (req.session["profile"] !== undefined && req.session["profile"] !== {}) {
      const currentAdmin = req.session["profile"]
      res.send(currentAdmin)
    } else {
      res.send("0")
    }
  }

  const logout = (req, res) => {
    req.session["profile"] = {}
    const currentAdmin = req.session["profile"]
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
  app.post("/api/admins/admin", profile)

  // app.get("/api/users/:id", findUserById)
  // app.get("/api/users", findAllUsers)
}