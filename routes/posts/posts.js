const express = require("express");

const postRoutes = express.Router();

postRoutes.post("", async (req, res) => {
    try {
      res.json({
        status: "Success",
        user: "Post created",
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  postRoutes.get("", async (req, res) => {
    try {
      res.json({
        status: "Success",
        user: "Post Fetched",
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  postRoutes.get("/:id", async (req, res) => {
    try {
      res.json({
        status: "Success",
        user: "Post Details",
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  postRoutes.delete("/:id", async (req, res) => {
    try {
      res.json({
        status: "Success",
        user: "Post Deleted",
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  postRoutes.put("/:id", async (req, res) => {
    try {
      res.json({
        status: "Success",
        user: "Post Updated",
      });
    } catch (error) {
      res.json(error);
    }
  });

  module.exports = postRoutes;