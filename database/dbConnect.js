import mongoose from "mongoose";

const dbConnect = async ( dbUrl,dbName) => {
  try {
    await mongoose.connect(dbUrl + dbName );
    console.log("database connected successfully");
  } catch (error) {
    console.log("error while connecting database");
  }
};

export default dbConnect;
