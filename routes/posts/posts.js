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

const upload = multer({storage})

postRoutes.post("",protected, upload.single('postImg'),  createPostCtrl);

postRoutes.get("", fetchPostCtrl);

postRoutes.get("/:id", postDetailsCtrl);

postRoutes.delete("/:id", deletePostCtrl);

postRoutes.put("/:id", updatePostCtrl);

module.exports = postRoutes;
