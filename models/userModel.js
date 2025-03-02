import mongoose from "mongoose";

const userScheama = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true },
});

const userModel = mongoose.model("/user", userScheama);

export default userModel