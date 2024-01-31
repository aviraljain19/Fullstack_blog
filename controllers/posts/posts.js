const User = require("../../models/user/User");
const Post = require("../../models/post/Post");
const appErrHandler = require("../../utils/appErr");

const createPostCtrl = async (req, res, next) => {
  try {
    const { title, description, category } = req.body;
    if (!title || !description || !category || !req.file) {
      //return next(appErrHandler("All fields are required"));
      return res.render("posts/addPost", { error: "All fields are required" });
    }
    const userId = req.session.userAuth;
    const userFound = await User.findById(userId);
    const createdPost = await Post.create({
      title,
      description,
      category,
      user: userFound._id,
      image: req.file.path,
    });
    userFound.posts.push(createdPost._id);
    await userFound.save();
    // res.json({
    //   status: "Success",
    //   data: createdPost,
    // });
    res.redirect("/");
  } catch (error) {
    //return next(appErrHandler(error.message));
    return res.render("posts/addPost", { error: error.message });
  }
};

const fetchPostCtrl = async (req, res, next) => {
  try {
    const posts = await Post.find().populate("comments").populate("user");
    res.json({
      status: "Success",
      data: posts,
    });
  } catch (error) {
    return next(appErrHandler(error.message));
  }
};

const postDetailsCtrl = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const postFound = await Post.findById(postId)
      .populate("comments")
      .populate("user");
    // res.json({
    //   status: "Success",
    //   data: postFound,
    // });
    res.render("posts/postDetails", { postFound, error: "" });
  } catch (error) {
    return next(appErrHandler(error.message));
  }
};

const deletePostCtrl = async (req, res, next) => {
  try {
    const postFound = await Post.findById(req.params.id);
    if (postFound.user.toString() !== req.session.userAuth.toString()) {
      return res.render("posts/postDetails", {
        postFound,
        error: "You are not authorized to delete this post",
      });
    }
    await Post.findByIdAndDelete(req.params.id);
    res.redirect("/");
    // res.json({
    //   status: "Success",
    //   data: "Post Deleted",
    // });
  } catch (error) {
    return res.render("posts/postDetails", {
      error: error.message,
      postFound: "",
    });
  }
};

const updatePostCtrl = async (req, res, next) => {
  try {
    const { title, description, category } = req.body;
    const postFound = await Post.findById(req.params.id);
    if (postFound.user.toString() !== req.session.userAuth.toString()) {
      return res.render("posts/updatePost", {
        error: "You are not authorized to update",
        post: "",
      });
    }
    if (req.file) {
      await Post.findByIdAndUpdate(
        req.params.id,
        {
          title,
          description,
          category,
          image: req.file.path,
        },
        {
          new: true,
        }
      );
    } else {
      await Post.findByIdAndUpdate(
        req.params.id,
        {
          title,
          description,
          category,
        },
        {
          new: true,
        }
      );
    }

    res.redirect("/");
    // res.json({
    //   status: "Success",
    //   data: updatedPost,
    // });
  } catch (error) {
    return res.render("posts/updatePost", {
      error: error.message,
      post: "",
    });
  }
};

module.exports = {
  createPostCtrl,
  postDetailsCtrl,
  deletePostCtrl,
  updatePostCtrl,
  fetchPostCtrl,
};
