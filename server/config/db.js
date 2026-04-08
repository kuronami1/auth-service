import mongoose from "mongoose";

const connectToDB = async () => {
  const url = process.env.DB_URL;

  try {
    await mongoose.connect(url);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Failed to establish connectiond with MongoDB");
  }
}

export default connectToDB;
