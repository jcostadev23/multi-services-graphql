import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true },
  isNew: { type: Boolean, required: true },
  userId: { type: String, required: true },
  description: { type: String, required: true },
});

export default model("Product", productSchema);
