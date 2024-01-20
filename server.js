require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/users/users");
const postRoutes = require("./routes/posts/posts");
const commentRoutes = require("./routes/comments/comments");
require("./config/dbConnect");

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/posts", postRoutes);

app.use("/api/v1/comments", commentRoutes);

//server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log("Server is running on port " + PORT));
