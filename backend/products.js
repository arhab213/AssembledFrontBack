import mongoose from "mongoose";

const productsModel = mongoose.Schema({
  name: { type: String, required: true },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});
export default mongoose.model("products", productsModel);
