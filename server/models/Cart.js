const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
  cart_name: String,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

module.exports = cartSchema;
