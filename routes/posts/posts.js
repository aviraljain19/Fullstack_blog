const express = require("express");
const {
  createPostCtrl,
  fetchPostCtrl,
  deletePostCtrl,
  updatePostCtrl,
  postDetailsCtrl,
} = require("../../controllers/posts/posts");

const postRoutes = express.Router();

postRoutes.post("", createPostCtrl);

postRoutes.get("", fetchPostCtrl);

postRoutes.get("/:id", postDetailsCtrl);

postRoutes.delete("/:id", deletePostCtrl);

postRoutes.put("/:id", updatePostCtrl);

module.exports = postRoutes;
