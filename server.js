const express = require('express')
const app = express()
const mongoose = require("mongoose");
require('dotenv').config()
const uri = process.env.MONGODB_URI;
const origin = process.env.ORIGIN_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(res => console.log("Connected to DB"))
.catch(err => console.log(err))
const cors = require("cors");
app.use(cors({credentials: true, origin: origin}));

const session = require('express-session')
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  //cookie: { secure: true }
}))

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers',
//       'Content-Type, X-Requested-With, Origin');
//   res.header('Access-Control-Allow-Methods',
//       'GET, POST, PUT, PATCH, DELETE, OPTIONS');
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header('Content-Type', 'application/json; charset=utf-8');
//   next();
// });

// 'https://wbdv-project-yz-client.herokuapp.com'

app.use(bodyParser.urlencoded({
  extended: true
}));

require("./controllers/users-controller")(app)
require("./controllers/drinks-controller")(app)
require("./controllers/reviews-controller")(app)
require("./controllers/admins-controller")(app)
app.get("/*", function (req, res) {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})
app.listen(4000)
// app.listen(process.env.PORT||4000)