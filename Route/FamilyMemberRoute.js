// const express = require("express");
// const {
//   createFamilyMember,
//   getFamilyMembers,
// } = require("../Controllar/FamilyMemControllar");
// const Router = express.Router();
// Router.post("/createMember", createFamilyMember);
// Router.get("/getMember", getFamilyMembers);
// module.exports = Router;

const express = require("express");
const {
  createFamilyMember,
  getFamilyMembers,
} = require("../Controllar/FamilyMemControllar");
const Router = express.Router();
Router.post("/createMember", createFamilyMember);
Router.get("/getMember", getFamilyMembers);
module.exports = Router;
