import mongoose from "mongoose";

const conn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "auth_db" });
    console.log("Database connect Successfully");
  } catch (error) {
    console.log("Database connection error ", error);
  }
};

export default conn;
