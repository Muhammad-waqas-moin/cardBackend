// const app = require("./app");
// const connectDatabase = require("./config/db");
// const dotenv = require("dotenv");
// // dotenv.config({ path: "./config/.env" });

// process.on("uncaughtException", (e) => {
//   console.log("shutting down server due to erroe :", e.message);
//   process.exit(1);
// });

// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config({ path: "./config/.env" });
// }
// const port = process.env.PORT || 3000;

// //connect database
// connectDatabase();

// //Connect server
// app.listen(port, () =>
//   console.log("server connected Successfully on port :", port)
// );

// //Route familyMemeber
// const FamilyMemeber = require("./Route/FamilyMemberRoute");
// app.use("/api/v1", FamilyMemeber);

// //Route Cards
// const Card = require("./Route/cardRoute");
// app.use("/api/v1", Card);

// // run when server not connected
// process.on("unhandledRejection", (error) => {
//   console.log("shutting down server due to error:", error.message);
//   server.close(() => {
//     process.exit(1); // ram ko khali karna
//   });
// });

const app = require("./app");
const connectDatabase = require("./config/db");
const dotenv = require("dotenv");
// dotenv.config({ path: "./config/.env" });

process.on("uncaughtException", (e) => {
  console.log("shutting down server due to erroe :", e.message);
  process.exit(1);
});

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./config/.env" });
}
const port = process.env.PORT || 3000;

//connect database
connectDatabase();

//Connect server
app.listen(port, () =>
  console.log("server connected Successfully on port :", port)
);

// Route;
const FamilyMemeber = require("./Route/FamilyMemberRoute");
const FriendsCards = require("./Route/cardRoute");
app.use("/api/v1", FamilyMemeber);
app.use("/api/v1", FriendsCards);

// const FamilyMemeber = require("./Route/FamilyMemberRoute");
// app.use("/api/v1", FamilyMemeber);

// const FriendsCards = require("./Route/CardsRoute");

// run when server not connected
process.on("unhandledRejection", (error) => {
  console.log("shutting down server due to error:", error.message);
  server.close(() => {
    process.exit(1); // ram ko khali karna
  });
});
