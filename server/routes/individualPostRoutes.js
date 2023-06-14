import express from "express";
import Post from "../mongodb/models/post.js";

const router = express.Router();

router.route("/:_id").get(async (req, res) => {
  const id = req.params._id;
  try {
    const onePost = await Post.findById(id);
    res.status(200).json({
      success: true,
      data: onePost,
    });
  } catch (error) {
    res.status(500).json("No post with such id found!");
  }
});

export default router;
