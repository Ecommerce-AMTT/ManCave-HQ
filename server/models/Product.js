const { Schema, model } = require("mongoose");
const Category = require("./Category");

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
  categoryId: Number,
  reviews: [reviewSchema],
});

const Product = model("Product", productSchema);

module.exports = Product;
