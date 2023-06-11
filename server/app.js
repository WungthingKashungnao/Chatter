const express = require("express"); //importin express package

const app = express();
// imported files created by me start
const serverConnect = require("./db/connection.js"); //file to connect to the databse ,the return value here is a function the connect function
const UserModel = require("./models/Users.js"); //this file contains User model
// imported files created by me end

app.use(express.json()); //very important we need this to send json data, for the routes
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;
// Route
app.get("/", (req, res) => {
  res.send("Welcome!");
});
// starting the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  serverConnect(); //connecting to the remote mongodb databse
});
