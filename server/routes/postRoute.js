const express = require("express");

const upload = require("../middleware/multer");
const { addPost, getPosts } = require("../controller/postController");
const router = express.Router();

router.post("/add-post", upload, addPost)
router.get("/posts", getPosts)

module.exports = router