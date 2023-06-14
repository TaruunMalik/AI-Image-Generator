import express from "express";
import bcrypt from "bcrypt";

const router = express.Router();
const salt = bcrypt.genSaltSync(10);

import User from "../mongodb/models/user.js";
router.route("/").post(async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const userX = await User.create({
      username: username,
      password: bcrypt.hashSync(password, salt),
    });
    res.status(200).json(userX);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

export default router;
