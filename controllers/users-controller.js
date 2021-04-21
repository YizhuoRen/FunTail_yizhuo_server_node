module.exports = (app) => {

  const usersService = require("../services/users-service")

  const login = (req, res) => {
    const credentials = req.body
    usersService.findUserByCredentials(credentials).then((actualUser) => {
      if (actualUser) {
        req.session["profile"] = actualUser
        res.send(actualUser)
      } else {
        res.send("0")
      }
    })
  }

  const logout = (req, res) => {
    req.session["profile"] = {}
    const currentUser = req.session["profile"]
    res.send(currentUser)
  }

  const register = (req, res) => {
    const credentials = req.body
    usersService.findUserByUsername(credentials.username).then((actualUser) => {
      if (actualUser.length > 0) {
        res.send("0")
      } else {
        usersService.createUser(credentials).then((newUser) => {
          req.session["profile"] = newUser;
          res.send(newUser)
        })
      }
    })
  }

  const profile = (req, res) => {
    if (req.session["profile"] !== undefined && req.session["profile"] !== {}) {
      const currentUser = req.session["profile"]
      res.send(currentUser)
    } else {
      res.send("0")
    }
  }

  const findAllUsers = (req, res) => {
    usersService.findAllUsers().then((users) => {
      res.send(users)
    })
  }

  const findUserById = (req, res) => {
    const id = req.params.id
    usersService.findUserById(id).then((user) => {
      res.send(user)
    })
  }

  const findRecentNewUsers = (req, res) => {
    usersService.findRecentNewUsers().then((users) => {
      res.send(users)
    })
  }

  const updateProfile = (req, res) => {
    const user = req.body
    usersService.updateProfile(user).then((user) => {
      res.send(user)
    })
  }

  const follow = (req, res) => {
    const userVisitedId = req.params.userVisitedId
    const currentUserId = req.params.currentUserId
    usersService.follow(userVisitedId, currentUserId).then((result)=>
        res.send(result))
  }

  app.post("/api/users/logout", logout)
  app.post("/api/users/profile", profile)
  app.post("/api/users/login", login)
  app.post("/api/users/register", register)
  app.get("/api/users/:id", findUserById)
  app.get("/api/users", findAllUsers)
  app.post("/api/users/new", findRecentNewUsers)
  app.post("/api/users/update", updateProfile)
  app.post("/api/users/follow/:userVisitedId/:currentUserId", follow)
}