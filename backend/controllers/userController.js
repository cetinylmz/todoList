const User = require("../models/user");

exports.getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json("Bulunamadı" + error);
  }
};

exports.crateUser = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
    });

    res.status(200).json({ message: "Add User" });
  } catch (error) {
    res.status(400).json({
      status: "false",
      error,
    });
  }
};

exports.deleteUsers = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete({
      _id: req.body._id,
    });

    res.status(200).json({ message: "user has been deleted" });
  } catch (error) {
    res.status(404).json({ message: "user not found" });
  }
};

exports.updateUsers = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.body._id },
      { name: req.body.name }
    );

    res.status(200).json("succes");
  } catch (error) {
    res.status(404).json({ message: "user not update" });
    console.log(error);
  }
};
