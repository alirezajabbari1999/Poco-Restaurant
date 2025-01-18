import mongoose from "mongoose";
// require("./Comment");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  img: {
    type: String, // تایپ عکس استرینگه بخاطره آدرسش
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  materials: {
    type: String,
    required: true,
  },
  comments: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
});

const model = mongoose.models.Product || mongoose.model("Product", schema);

export default model;
