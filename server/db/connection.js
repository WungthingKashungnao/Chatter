const mongoose = require("mongoose"); //requiring mongoose package

const url = `mongodb+srv://athing:athing%40123@cluster0.snogtuk.mongodb.net/ChatApp?retryWrites=true&w=majority`;
// connecting to remote mongodb database
const connect = () => {
  mongoose
    .connect(url)
    .then(() => console.log("Connected to mongodb databse"))
    .catch((e) => console.log("Error", e));
};
module.exports = connect;
