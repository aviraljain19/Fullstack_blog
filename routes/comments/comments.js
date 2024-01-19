const express = require("express");

const commentRoutes = express.Router();

commentRoutes.post("", async (req, res) => {
    try {
      res.json({
        status: "Success",
        user: "Comments created",
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  commentRoutes.get("/:id", async (req, res) => {
    try {
      res.json({
        status: "Success",
        user: "Comment Details",
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  commentRoutes.delete("/:id", async (req, res) => {
    try {
      res.json({
        status: "Success",
        user: "Comment Deleted",
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  commentRoutes.put("/:id", async (req, res) => {
    try {
      res.json({
        status: "Success",
        user: "Comment Updated",
      });
    } catch (error) {
      res.json(error);
    }
  });

  module.exports = commentRoutes