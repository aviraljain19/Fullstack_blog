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
    res.json(error);
  }
};

const fetchPostCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Post Fetched",
    });
  } catch (error) {
    res.json(error);
  }
};

const postDetailsCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Post Details",
    });
  } catch (error) {
    res.json(error);
  }
};

const deletePostCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Post Deleted",
    });
  } catch (error) {
    res.json(error);
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
