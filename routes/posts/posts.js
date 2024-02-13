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
const Post = require("../../models/post/Post");

const postRoutes = express.Router();

const upload = multer({ storage });

postRoutes.get("/create-post-form", (req, res) => {
  res.render("posts/addPost", { error: "" });
});

postRoutes.get("/get-form-update/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.render("posts/updatePost", { post, error: "" });
  } catch (error) {
    res.render("posts/updatePost", { error, post: "" });
  }
});

postRoutes.post("", protected, upload.single("postImg"), createPostCtrl);

postRoutes.get("", fetchPostCtrl);

postRoutes.get("/:id", protected, postDetailsCtrl);

postRoutes.delete("/:id", protected, deletePostCtrl);

postRoutes.put("/:id", protected, upload.single("postImg"), updatePostCtrl);

module.exports = postRoutes;
