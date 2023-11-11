import mongoose from "mongoose";
const userModel = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: () => {
      return new Date();
    },
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
export default mongoose.model("users", userModel);
