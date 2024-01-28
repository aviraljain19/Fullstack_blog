require("dotenv").config();
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const userRoutes = require("./routes/users/users");
const postRoutes = require("./routes/posts/posts");
const commentRoutes = require("./routes/comments/comments");
const globalErrHandler = require("./middlewares/globalHandler");
const Post = require("./models/post/Post");
const { truncate } = require("./utils/helper");
require("./config/dbConnect");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.use(methodOverride("_method"));

app.locals.truncate = truncate;

app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
      mongoUrl: process.env.MONGO_URL,
      ttl: 24 * 60 * 60,
    }),
  })
);

app.use((req, res, next) => {
  if (req.session.userAuth) {
    res.locals.userAuth = req.session.userAuth;
  } else {
    res.locals.userAuth = null;
  }
  next();
});

app.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("user");
    res.render("index.ejs", { posts });
  } catch (error) {
    res.render("index.ejs", { error: error.message });
  }
});

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/posts", postRoutes);

app.use("/api/v1/comments", commentRoutes);

app.use(globalErrHandler);

//server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log("Server is running on port " + PORT));
