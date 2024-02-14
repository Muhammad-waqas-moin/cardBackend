// const mongoose = require("mongoose");
// // const { boolean } = require("webidl-conversions");

// const CardSchema = mongoose.Schema({
//   friendOf: {
//     type: String,
//     required: [true, "friend name is required"],
//   },
//   isCarddeliverd: {
//     type: Boolean,
//     required: [true, "plz `check"],
//   },
//   friendName: {
//     type: String,
//     required: [true, "plz provides friend name"],
//   },
// });

// module.exports = mongoose.model("Card", CardSchema);

const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const CardSchema = mongoose.Schema({
  friendName: {
    type: String,
    required: [true, "friend name is required"],
  },
  friendOf: {
    type: String,
    required: [true, "friendof name is required"],
  },
  isCarddeliverd: {
    type: Boolean,
    required: [true, "plz check "],
  },
});

module.exports = mongoose.model("Cards", CardSchema);
