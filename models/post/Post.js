const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Education",
        "Fashion",
        "Business",
        "Food",
        "Lifestyle",
        "Travel",
        "Finance",
        "Personal",
        "Affiliate",
        "Movie",
        "Music",
        "Crafts",
        "Fitness",
        "Marketing",
        "News",
        "Parenting",
        "Gaming",
        "Political",
        "Others",
      ],
    },
    image: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
