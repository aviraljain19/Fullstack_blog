const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      default:
        "https://res.cloudinary.com/dwmlrounk/image/upload/v1708024614/Blog-app/opmwcjhpbbcrsqtt8qo7.png",
    },
    coverImage: {
      type: String,
      default:
        "https://res.cloudinary.com/dwmlrounk/image/upload/v1708024824/Blog-app/isxf0zlud1vayhpnrrov.png",
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
