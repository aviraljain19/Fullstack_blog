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
  res.render("users/login", {
    error: "",
  });
});

userRoutes.get("/register", (req, res) => {
  res.render("users/register", {
    error: "",
  });
});

userRoutes.get("/upload-profile-photo-form", (req, res) => {
  res.render("users/uploadProfilePhoto", { error: "" });
});

userRoutes.get("/upload-cover-photo-form", (req, res) => {
  res.render("users/uploadCoverPhoto", { error: "" });
});

userRoutes.get("/update-password", (req, res) => {
  res.render("users/updatePassword", { error: "" });
});

// userRoutes.get("/update-user-form", (req, res) => {
//   res.render("users/updateUser");
// });

userRoutes.post("/register", registerCtrl);

userRoutes.post("/login", loginCtrl);

userRoutes.get("/logout", logoutCtrl);

userRoutes.get("/profile-page", protected, profileCtrl);

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

userRoutes.put("/update-password", updatePasswordCtrl);

userRoutes.put("/update", updateUserCtrl);

userRoutes.get("/:id", userDetailsCtrl);

module.exports = userRoutes;
