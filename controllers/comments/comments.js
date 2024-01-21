const Post = require("../../models/post/Post");
const User = require("../../models/user/User");
const Comment = require("../../models/comment/Comment");
const appErrHandler = require("../../utils/appErr");

const createCommentCtrl = async (req, res, next) => {
  try {
    const {message} = req.body;
    if(!message){
      return next(appErrHandler("Please enter comment"));
    }
    const post = await Post.findById(req.params.id);
    const user = await User.findById(req.session.userAuth);
    const comment = await Comment.create({
      user: req.session.userAuth,
      message,
    });
    post.comments.push(comment._id);
    user.comments.push(comment._id);
    post.save({ validateBeforeSave: false });
    user.save({ validateBeforeSave: false });
    res.json({
      status: "Success",
      user: "Comments created",
    });
  } catch (error) {
    return next(appErrHandler(error.message));
  }
};

const commentDetailsCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Comment Details",
    });
  } catch (error) {
    res.json(error);
  }
};

const deleteCommentCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Comment Deleted",
    });
  } catch (error) {
    res.json(error);
  }
};

const updateCommentController = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Comment Updated",
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createCommentCtrl,
  deleteCommentCtrl,
  updateCommentController,
  commentDetailsCtrl,
};
