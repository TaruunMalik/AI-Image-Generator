import Post from "../mongodb/models/post.js";
import express from "express";

import * as dotenv from "dotenv";

import { v2 as cloudinary } from "cloudinary";
import { Configuration, OpenAIApi } from "openai";
dotenv.config();

const router = express.Router();

router.delete("/");

const deleteRoutes = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params._id);
  } catch (error) {}
};

export default deleteRoutes;
