import mongoose from "mongoose";

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserSchema = mongoose.model("User", User); //second is schema and first is user

export default UserSchema;
