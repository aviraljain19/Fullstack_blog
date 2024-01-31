const Post = require("../../models/post/Post");
const User = require("../../models/user/User");
const Comment = require("../../models/comment/Comment");
const appErrHandler = require("../../utils/appErr");

const createCommentCtrl = async (req, res, next) => {
  try {
    const { message } = req.body;
    if (!message) {
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
    // res.json({
    //   status: "Success",
    //   user: "Comments created",
    // });
    res.redirect(`/api/v1/posts/${post._id}`);
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

const deleteCommentCtrl = async (req, res, next) => {
  try {
    const commentFound = await Comment.findById(req.params.id);
    if (commentFound.user.toString() !== req.session.userAuth.toString()) {
      return next(appErrHandler("Access denied", 403));
    }
    await Comment.findByIdAndDelete(req.params.id);
    res.json({
      status: "Success",
      data: "Comment Deleted",
    });
  } catch (error) {
    return next(appErrHandler(error.message));
  }
};

const updateCommentController = async (req, res, next) => {
  try {
    const { message } = req.body;
    const commentFound = await Comment.findById(req.params.id);
    if (!commentFound) {
      return next(appErrHandler("Comment not found"));
    }
    if (commentFound.user.toString() !== req.session.userAuth.toString()) {
      return next(appErrHandler("Access denied", 403));
    }
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      {
        message,
      },
      {
        new: true,
      }
    );
    res.json({
      status: "Success",
      data: updatedComment,
    });
  } catch (error) {
    return next(appErrHandler(error.message));
  }
};

module.exports = {
  createCommentCtrl,
  deleteCommentCtrl,
  updateCommentController,
  commentDetailsCtrl,
};
