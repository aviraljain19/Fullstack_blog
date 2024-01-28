const express = require("express");
const multer = require("multer");
const {
  createPostCtrl,
  fetchPostCtrl,
  deletePostCtrl,
  updatePostCtrl,
  postDetailsCtrl,
} = require("../../controllers/posts/posts");
const protected = require("../../middlewares/protected");
const storage = require("../../config/cloudinary");

const postRoutes = express.Router();

const upload = multer({ storage });

postRoutes.get("/create-post-form", (req, res) => {
  res.render("posts/addPost", { error: "" });
});

postRoutes.post("", protected, upload.single("postImg"), createPostCtrl);

postRoutes.get("", fetchPostCtrl);

postRoutes.get("/:id", postDetailsCtrl);

postRoutes.delete("/:id", protected, deletePostCtrl);

postRoutes.put("/:id", protected, upload.single("postImg"), updatePostCtrl);

module.exports = postRoutes;
