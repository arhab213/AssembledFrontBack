import mongoose from "mongoose";
const booksModel = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  isbn: {
    type: Number,
    required: true,
    unique: true,
  },
  descriptions: {
    type: String,
  },
  release: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  },
  createdAt: {
    type: Date,
    default: () => {
      return new Date();
    },
  },
});
export default mongoose.model("books", booksModel);
