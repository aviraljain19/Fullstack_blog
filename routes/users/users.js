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

const userRoutes = express.Router();

userRoutes.post("/register", registerCtrl);

userRoutes.post("/login", loginCtrl);

userRoutes.get("/:id", userDetailsCtrl);

userRoutes.get("/profile/:id", profileCtrl);

userRoutes.put("/profile-photo-upload/:id", uploadProfilePhotoCtrl);

userRoutes.put("/cover-photo-upload/:id", coverPhotoCtrl);

userRoutes.put("/update-password/:id", updatePasswordCtrl);

userRoutes.put("/update/:id", updateUserCtrl);

userRoutes.get("/logout", logoutCtrl);

module.exports = userRoutes;
