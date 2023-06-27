// this is Conversation model file
const mongoose = require("mongoose");

const conversationSchema = mongoose.Schema({
  members: {
    type: Array,
    required: true,
  },
});

// here Conversation is the name of the collection, but s will automatically added and C wil become small letter, and will be renamed to conversations
const Conversation = mongoose.model("Conversation", conversationSchema);
module.exports = Conversation; //exporting the conversations model
