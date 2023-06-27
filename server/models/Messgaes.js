// this is Messages model file
const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  conversationId: {
    type: String,
  },
  senderId: {
    type: String,
  },
  message: {
    type: String,
  },
});

// here Message is the name of the collection, but s will automatically added and M wil become small letter, and will be renamed to messages
const Messages = mongoose.model("Message", messageSchema);
module.exports = Messages; //exporting the messages model
