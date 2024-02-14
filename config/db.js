const mongoose = require("mongoose");
const dotenv = require("dotenv");

const databaseconnection = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("database connected"))
    .catch(() => console.log("failed to connect database"));
};
module.exports = databaseconnection;
