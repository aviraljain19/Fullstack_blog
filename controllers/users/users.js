const bcrypt = require("bcryptjs");
const User = require("../../models/user/User");

const registerCtrl = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const userFound = await User.findOne({ email });
    if (userFound) {
      return res.json({ status: "Failed", data: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });
    res.json({
      status: "Success",
      data: user,
    });
  } catch (error) {
    res.json(error);
  }
};

const loginCtrl = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });
    if (!userFound) {
      return res.json({
        status: "Failed",
        data: "Invalid Credentials",
      });
    }
    const userPassword = await bcrypt.compare(password, userFound.password);
    if (!userPassword) {
      return res.json({
        status: "Failed",
        data: "Invalid Credentials",
      });
    }
    res.json({
      status: "Success",
      data: userFound,
    });
  } catch (error) {
    res.json(error);
  }
};

const userDetailsCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User Details",
    });
  } catch (error) {
    res.json(error);
  }
};

const profileCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User Profile",
    });
  } catch (error) {
    res.json(error);
  }
};

const uploadProfilePhotoCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User Profile Image",
    });
  } catch (error) {
    res.json(error);
  }
};

const coverPhotoCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User Cover Image",
    });
  } catch (error) {
    res.json(error);
  }
};

const updatePasswordCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User Password Update",
    });
  } catch (error) {
    res.json(error);
  }
};

const updateUserCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User Update",
    });
  } catch (error) {
    res.json(error);
  }
};

const logoutCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User Logout",
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  logoutCtrl,
  updateUserCtrl,
  updatePasswordCtrl,
  coverPhotoCtrl,
  uploadProfilePhotoCtrl,
  profileCtrl,
  registerCtrl,
  loginCtrl,
  userDetailsCtrl,
};
