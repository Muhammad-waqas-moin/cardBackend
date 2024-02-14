const mongoose = require("mongoose");

const FamilyMembers = mongoose.Schema([
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
]);
module.exports = mongoose.model("FamilyMembers", FamilyMembers);
