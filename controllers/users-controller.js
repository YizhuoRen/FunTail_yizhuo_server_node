module.exports = (app) => {

  const usersService = require("../services/users-service")
  const reviewsService = require("../services/reviews-service")
  const drinksService = require("../services/drinks-service")
  const usersModel = require("../models/users/users-model");

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
    usersService.findUserByName(credentials.username).then((actualUser) => {
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

  const deleteUser = (req, res) => {
    const id = req.params.id
    usersModel.findById(id).then(user => {
      if (user.following.length > 0) {
        user.following.map((singleFollowing) => {
          usersModel.updateOne({_id: singleFollowing},
              {$pull: {followers: id}}).then(() => {
          })
        })
      }
      if (user.followers.length > 0) {
        user.followers.map((follower) => {
          usersModel.updateOne({_id: follower},
              {$pull: {following: id}}).then(() => {
          })
        })
      }
    })
    usersService.deleteUser(id).then((result) => {
      reviewsService.deleteReviewByCreator(id).then(()=>{})
      drinksService.deleteDrinkByCreator(id).then(()=>{})
      res.send(result)
    })
  }

  const findUserByName = (req, res) => {
    const username = req.params.username
    usersService.findUserByName(username).then((user) => {
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
      req.session["profile"] = user;
      res.send(user)
    })
  }

  const follow = (req, res) => {
    const userVisitedId = req.params.userVisitedId
    const currentUserId = req.params.currentUserId
    usersService.follow(userVisitedId, currentUserId).then((result)=> {
      usersService.findUserById(currentUserId).then((user) =>
          req.session["profile"] = user)
      res.send(result)
  })
  }

  const unfollow = (req, res) => {
    const userVisitedId = req.params.userVisitedId
    const currentUserId = req.params.currentUserId
    usersService.unfollow(userVisitedId, currentUserId).then((result)=> {
      // usersService.findUserById(currentUserId).then((user) =>
      //     req.session["profile"] = user)
      res.send(result)
    })
  }

  const checkFollowingState = (req, res) => {
    const userVisitedId = req.params.userVisitedId
    const currentUserId = req.params.currentUserId
    usersService.findUserByIdNoPopulate(userVisitedId).then((userVisited) => {
      if (userVisited.followers.includes(currentUserId)) {
        res.send("1")
      } else {
        res.send("0")
      }
    })
}


  app.post("/api/users/logout", logout)
  app.post("/api/users/profile", profile)
  app.post("/api/users/login", login)
  app.post("/api/users/register", register)
  app.post("/api/users/user/:id", findUserById)
  app.delete("/api/users/:id", deleteUser)
  app.get("/api/users/username/:username", findUserByName)
  app.get("/api/users", findAllUsers)
  app.post("/api/users/new", findRecentNewUsers)
  app.post("/api/users/update", updateProfile)
  app.post("/api/users/follow/:userVisitedId/:currentUserId", follow)
  app.post("/api/users/unfollow/:userVisitedId/:currentUserId", unfollow)
  app.post("/api/users/:userVisitedId/:currentUserId", checkFollowingState)
}