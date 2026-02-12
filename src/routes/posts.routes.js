const express = require("express");
const router = express.Router();

// controller is in controllers folder
const postController = require("../controllers/posts.controller");

router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPostById);

module.exports = router;
