import express from "express";
import User from "../mongodb/models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();

const secretSalt = bcrypt.genSaltSync(10);

router.route("/").post(async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const userDoc = await User.findOne({ username });
  const compared = bcrypt.compareSync(password, userDoc.password);
  if (compared) {
    // res.status(200).json(userDoc);
    jwt.sign({ username, id: userDoc._id }, secretSalt, {}, (err, token) => {
      if (err) {
        throw err;
      } else {
        // res.status(200).json(token);
        res.cookie("token", token).json({
          data: userDoc,
          token,
        });
      }
    });
  } else {
    res.status(404).json("Nooooou");
  }
});

router.route("/").get((req, res) => {
  const token = req.cookies.token;
  jwt.verify(token, secretSalt, {}, (err, info) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(req.cookies);
    }
  });
  //   res.json(req.cookies);
});

export default router;
