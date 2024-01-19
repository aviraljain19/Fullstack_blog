const express = require("express");
const {
  createCommentCtrl,
  commentDetailsCtrl,
  deleteCommentCtrl,
  updateCommentController,
} = require("../../controllers/comments/comments");

const commentRoutes = express.Router();

commentRoutes.post("", createCommentCtrl);

commentRoutes.get("/:id", commentDetailsCtrl);

commentRoutes.delete("/:id", deleteCommentCtrl);

commentRoutes.put("/:id", updateCommentController);

module.exports = commentRoutes;
