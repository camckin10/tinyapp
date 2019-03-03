const express = require("express");
//const mongoose = require("mongoose");
//const bodyParser = require("body-parser");
//const app = express();

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})

// // Bodyparser middleware
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
// app.use(bodyParser.json());
// // DB Config
// const db = require("./config/keys").mongoURI;
// // Connect to MongoDB
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));
// const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
// app.listen(port, () => console.log(`Server up and running on port ${port} !`));