const express = require("express");
const {
  logoutCtrl,
  updateUserCtrl,
  updatePasswordCtrl,
  coverPhotoCtrl,
  registerCtrl,
  loginCtrl,
  userDetailsCtrl,
  profileCtrl,
  uploadProfilePhotoCtrl,
} = require("../../controllers/users/users");
const protected = require("../../middlewares/protected")

const userRoutes = express.Router();

userRoutes.post("/register", registerCtrl);

userRoutes.post("/login", loginCtrl);

userRoutes.get("/logout", logoutCtrl);

userRoutes.get("/profile",protected, profileCtrl);

userRoutes.put("/profile-photo-upload/:id", uploadProfilePhotoCtrl);

userRoutes.put("/cover-photo-upload/:id", coverPhotoCtrl);

userRoutes.put("/update-password/:id", updatePasswordCtrl);

userRoutes.put("/update/:id", updateUserCtrl);

userRoutes.get("/:id", userDetailsCtrl);



module.exports = userRoutes;
