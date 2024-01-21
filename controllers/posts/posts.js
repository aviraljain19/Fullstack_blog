const User = require("../../models/user/User");
const Post = require("../../models/post/Post");
const appErrHandler = require("../../utils/appErr");

const createPostCtrl = async (req, res, next) => {
  try {
    const { title, description, category} = req.body;
    if(!title|| !description|| !category || !req.file){
      return next(appErrHandler("All fields are required"));
    }
    const userId = req.session.userAuth;
    const userFound = await User.findById(userId);
    const createdPost = await Post.create({
      title,
      description,
      category,
      user: userFound._id,
      image:req.file.path,
    });
    userFound.posts.push(createdPost._id);
    await userFound.save();
    res.json({
      status: "Success",
      data: createdPost,
    });
  } catch (error) {
    return next(appErrHandler(error.message));
  }
};

const fetchPostCtrl = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json({
      status: "Success",
      data:posts,
    });
  } catch (error) {
    return next(appErrHandler(error.message));
  }
};

const postDetailsCtrl = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const postFound = await Post.findById(postId)
    res.json({
      status: "Success",
      data:postFound,
    });
  } catch (error) {
    return next(appErrHandler(error.message));
  }
};

const deletePostCtrl = async (req, res, next) => {
  try {
    const postFound = await Post.findById(req.params.id);
    if(postFound.user.toString() !== req.session.userAuth.toString()){
      return next(appErrHandler("Access denied",403));
    }
    res.json({
      status: "Success",
      data: "Post Deleted",
    });
  } catch (error) {
    return next(appErrHandler(error.message));
  }
};

const updatePostCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Post Updated",
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createPostCtrl,
  postDetailsCtrl,
  deletePostCtrl,
  updatePostCtrl,
  fetchPostCtrl,
};
