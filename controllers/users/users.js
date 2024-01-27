const bcrypt = require("bcryptjs");
const User = require("../../models/user/User");
const appErrHandler = require("../../utils/appErr");

const registerCtrl = async (req, res, next) => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      // return next(appErrHandler("Please fill the required fields"));
      return res.render("users/register", {
        error: "All fields are required",
      });
    }

    const userFound = await User.findOne({ email });
    if (userFound) {
      //return next(appErrHandler("User already exists"));
      return res.render("users/register", {
        error: "User already exists please login",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });
    res.redirect("/api/v1/users/profile-page");
  } catch (error) {
    return next(appErrHandler(error.message));
  }
};

const loginCtrl = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      //return next(appErrHandler("Please fill the required fields"));
      return res.render("users/login", {
        error: "All fields are required",
      });
    }

    const userFound = await User.findOne({ email });
    if (!userFound) {
      //return next(appErrHandler("Invalid Credentials"));
      return res.render("users/login", {
        error: "Invalid credentials",
      });
    }
    const userPassword = await bcrypt.compare(password, userFound.password);
    if (!userPassword) {
      //return next(appErrHandler("Invalid Credentials"));
      return res.render("users/login", {
        error: "Invalid credentials",
      });
    }

    req.session.userAuth = userFound._id;
    //console.log(req.session.userAuth);
    res.redirect("/api/v1/users/profile-page");
    // res.json({
    //   status: "Success",
    //   data: userFound,
    // });
  } catch (error) {
    return next(appErrHandler(error.message));
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
    return next(appErrHandler(error.message));
  }
};

const profileCtrl = async (req, res, next) => {
  try {
    const userId = req.session.userAuth;
    const user = await User.findById(userId)
      .populate("posts")
      .populate("comments");
    res.render("users/profile", { user });
    // res.json({
    //   status: "Success",
    //   data: user,
    // });
  } catch (error) {
    return next(appErrHandler(error.message));
  }
};

const uploadProfilePhotoCtrl = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.render("users/uploadProfilePhoto", {
        error: "Please upload image",
      });
    }
    const userId = req.session.userAuth;
    const userFound = await User.findById(userId);
    if (!userFound) {
      return res.render("users/uploadProfilePhoto", {
        error: "User not found",
      });
    }

    await User.findByIdAndUpdate(
      userId,
      {
        profileImage: req.file.path,
      },
      {
        new: true,
      }
    );
    // res.json({
    //   status: "Success",
    //   data: "You have sucessfully updated your profile photo",
    // });
    res.redirect("/api/v1/users/profile-page");
  } catch (error) {
    return res.render("users/uploadProfilePhoto", { error: error.message });
  }
};

const coverPhotoCtrl = async (req, res, next) => {
  try {
    const userId = req.session.userAuth;
    const userFound = await User.findById(userId);
    if (!userFound) {
      return next(appErrHandler("User not found", 403));
    }
    await User.findByIdAndUpdate(
      userId,
      {
        coverImage: req.file.path,
      },
      {
        new: true,
      }
    );
    res.json({
      status: "Success",
      data: "Cover Image updated",
    });
  } catch (error) {
    return next(appErrHandler(error.message));
  }
};

const updatePasswordCtrl = async (req, res) => {
  try {
    const { password } = req.body;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      await User.findByIdAndUpdate(req.params.id, {
        password: hashedPassword,
      });
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
    req.session.destroy(() => {
      res.redirect("/api/v1/users/login");
    });

    // res.json({
    //   status: "Success",
    //   user: "User Logout",
    // });
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
