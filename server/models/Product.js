const { Schema, model } = require("mongoose");
const reviewSchema = require("/Reviews");

const productSchema = new Schema({
  productId: String,
  name: String,
  description: String,
  image: String,
  price: Number,
  stock: Number,
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  reviews: [reviewSchema],
});

module.export = model("Product", productSchema);
