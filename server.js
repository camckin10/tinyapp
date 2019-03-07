const path = require('path');
const express = require("express");
const serveStatic = require('serve-static');

//const mongoose = require("mongoose");
//const bodyParser = require("body-parser");
//const app = express();
//const path = 'path';

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()


//server.use('/public', express.static(__dirname + '/public'));
//server.use(serveStatic('public'));
//server.use('/tinyapp', express.static('public'))
//server.use('/tinyapp', express.static(path.join(__dirname, 'tinyapp')))
//server.use(express.static('tinyapp'))
//server.use('public', path.join(__dirname, 'public'));
//server.use(express.static(__dirname + 'tinyapp'));

server.use(middlewares)
server.use(router)
server.listen(process.env.PORT || 5000, () => {
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