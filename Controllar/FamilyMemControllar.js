const FamilyMembers = require("../Model/FamilyMemberSchema");

exports.createFamilyMember = async (req, res, next) => {
  const result = await FamilyMembers.create(req.body);
  console.log(result);
  res.status(201).json({
    status: "success",
    data: "successfully created Family memeber",
  });
};
exports.getFamilyMembers = async (req, res) => {
  const result = await FamilyMembers.find();
  res.status(200).json({
    status: "success",
    data: result,
  });
};
