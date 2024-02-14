// const express = require("express");
// const { createCard, getCards } = require("../Controllar/CardControllar");
// const router = express.Router();
// router.post("/Card", createCard);
// router.get("/Card", getCards);

// module.exports = router;

const express = require("express");
const {
  CreateFriendCard,
  getFriendsCards,
  updateCard,
} = require("../Controllar/CardControllar");
const Router = express.Router();
Router.post("/CreateFriendCard", CreateFriendCard);
Router.get("/getFriendsCards", getFriendsCards);
Router.put("/updateCard/:id", updateCard);
module.exports = Router;
