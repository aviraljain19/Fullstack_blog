const bcrypt = require("bcryptjs");
const User = require("../../models/user/User");
const appErrHandler = require("../../utils/appErr");

const registerCtrl = async (req, res, next) => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return next(appErrHandler("Please fill the required fields"));
    }

    const userFound = await User.findOne({ email });
    if (userFound) {
      return next(appErrHandler("User already exists"));
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

const loginCtrl = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(appErrHandler("Please fill the required fields"));
    }

    const userFound = await User.findOne({ email });
    if (!userFound) {
      return next(appErrHandler("Invalid Credentials"));
    }
    const userPassword = await bcrypt.compare(password, userFound.password);
    if (!userPassword) {
      return next(appErrHandler("Invalid Credentials"));
    }

    req.session.userAuth = userFound._id;
    console.log(req.session.userAuth);
    res.json({
      status: "Success",
      data: userFound,
    });
  } catch (error) {
    res.json(error);
  }
};

const userDetailsCtrl = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.json({
      status: "Success",
      data: user,
    });
  } catch (error) {
    res.json(error);
  }
};

const profileCtrl = async (req, res) => {
  try {
    const userId = req.session.userAuth;
    const user = await User.findById(userId);
    res.json({
      status: "Success",
      data: user,
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
    const {password} = req.body;
    if(password){
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password,salt)
      await User.findByIdAndUpdate(req.params.id,{
        password:hashedPassword,
      })
      res.json({
        status: "Success",
        user: "Password Changed succesfully",
      });
    }
    
  } catch (error) {
    return next(appErrHandler("Please fill the password field"));
  }
};

const updateUserCtrl = async (req, res, next) => {
  try {
    const { fullname, email } = req.body;
    if (email) {
      const usedEmail = await User.findOne({ email });
      if (usedEmail) {
        return next(appErrHandler("Email already in use", 400));
      }
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        fullname,
        email,
      },
      {
        new: true,
      }
    );
    res.json({
      status: "Success",
      data: updatedUser,
    });
  } catch (error) {
    return next(appErrHandler(error.message));
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
