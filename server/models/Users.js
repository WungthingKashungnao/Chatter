// this is user model file
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  // a new token will be created whenever a user signs in
  token: {
    type: String,
  },
});

// here User is the name of the collection, but s will automatically added and will be renamed to Users
const Users = mongoose.model("User", userSchema);
module.exports = Users; //exporting the users model
