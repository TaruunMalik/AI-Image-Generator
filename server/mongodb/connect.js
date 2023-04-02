import mongoose from "mongoose";

const connectDb = (url) => {
  mongoose.set("strictQuery", true); //useful for search functionality

  mongoose
    .connect(url)
    .then(() => {
      console.log("MongoDb connected");
    })
    .catch((err) => {
      console.log("Not connected");
      // console.log(err);
    });
};

export default connectDb;
