import mongoose from "mongoose";

const connectDB = () => {
  mongoose.set("strictQuery", true);

  mongoose.connect(URL)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err));
};

export default connectDB;
