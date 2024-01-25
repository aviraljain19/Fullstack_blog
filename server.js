require("dotenv").config();
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const userRoutes = require("./routes/users/users");
const postRoutes = require("./routes/posts/posts");
const commentRoutes = require("./routes/comments/comments");
const globalErrHandler = require("./middlewares/globalHandler");
require("./config/dbConnect");

const app = express();

app.use(express.json());

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

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

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/posts", postRoutes);

app.use("/api/v1/comments", commentRoutes);

app.use(globalErrHandler);

//server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log("Server is running on port " + PORT));
