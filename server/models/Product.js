const { Schema, model } = require("mongoose");
const Category = require("./Category");

const productSchema = new Schema({
  title: String,
  description: String,
  price: String,
  discountPercentage: String,
  rating: String,
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
  categories: [Category.schema],
});

const Product = model("Product", productSchema);

module.exports = Product;
