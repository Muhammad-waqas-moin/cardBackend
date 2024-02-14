//
const Cards = require("../Model/CardSchema");

exports.CreateFriendCard = async (req, res, next) => {
  const result = await Cards.create(req.body);
  res.status(201).json({
    status: "success",
    data: "succesuly created",
  });
};

exports.getFriendsCards = async (req, res, next) => {
  const result = await Cards.find();
  res.status(200).json({
    status: "success",
    data: result,
  });
};

// exports.updateCard = async (req, res, next) => {
//   res.send("successfully run");
// };

exports.updateCard = async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from request parameters
    const updateData = req.body; // Data to update from request body

    console.log(id, updateData);
    // res.send("success");
    // Find the document by ID and update it
    const updatedDoc = await Cards.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedDoc) {
      return res.status(404).json({ message: "Document not found" });
    }

    // If the document is successfully updated, send a success response
    res
      .status(200)
      .json({ message: "Document updated successfully", data: updatedDoc });
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
