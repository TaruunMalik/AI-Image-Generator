import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDb from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import lunaRoutes from "./routes/lunaRoutes.js";
import deleteRoutes from "./routes/deleteRoutes.js";
import individualPostRoutes from "./routes/individualPostRoutes.js";
import registerRoutes from "./routes/registerRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
// import PostSchema from "./mongodb/models/post.js";
import Post from "./mongodb/models/post.js";

dotenv.config();

const app = express();
app.use(cors({ credentials: true, origin: "http://127.0.0.1:5173" }));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/ai", lunaRoutes);
app.use("/api/v1/single", individualPostRoutes);
app.use("/api/v1/register", registerRoutes);
app.use("/api/v1/login", loginRoutes);
app.use("/profile", loginRoutes);
// app.use("/api/v1/:_id", deleteRoutes);

app.delete("/api/v1/post/:_id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params._id);
    res.status(200).json({
      success: true,
      message: `deleted ${req.params._id}`,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `No post found with ${req.params._id} id`,
    });
  }
});

app.get("/", async (req, res) => {
  res.send("HelloW Alternate world");
});

const startServer = async () => {
  try {
    connectDb(process.env.MONGODB_URL);
  } catch (err) {}

  app.listen(8080, () => {
    console.log("Yooooo");
  });
};

startServer();
