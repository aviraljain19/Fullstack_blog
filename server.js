require("dotenv").config();
const express = require("express");
const session = require("express-session");
const userRoutes = require("./routes/users/users");
const postRoutes = require("./routes/posts/posts");
const commentRoutes = require("./routes/comments/comments");
const globalErrHandler = require("./middlewares/globalHandler");
require("./config/dbConnect");

const app = express();

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/posts", postRoutes);

app.use("/api/v1/comments", commentRoutes);

app.use(globalErrHandler);

//server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log("Server is running on port " + PORT));
