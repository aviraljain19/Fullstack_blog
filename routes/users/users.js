const express = require("express");
const multer = require("multer");
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
const protected = require("../../middlewares/protected");
const storage = require("../../config/cloudinary");

const userRoutes = express.Router();

const upload = multer({ storage });

userRoutes.get("/login", (req, res) => {
  res.render("users/login");
});

userRoutes.get("/register", (req, res) => {
  res.render("users/register");
});

userRoutes.get("/profile-page", (req, res) => {
  res.render("users/profile");
});

userRoutes.post("/register", registerCtrl);

userRoutes.post("/login", loginCtrl);

userRoutes.get("/logout", logoutCtrl);

userRoutes.get("/profile", protected, profileCtrl);

userRoutes.put(
  "/profile-photo-upload",
  protected,
  upload.single("profile"),
  uploadProfilePhotoCtrl
);

userRoutes.put(
  "/cover-photo-upload",
  protected,
  upload.single("cover"),
  coverPhotoCtrl
);

userRoutes.put("/update-password/:id", updatePasswordCtrl);

userRoutes.put("/update/:id", updateUserCtrl);

userRoutes.get("/:id", userDetailsCtrl);

module.exports = userRoutes;
