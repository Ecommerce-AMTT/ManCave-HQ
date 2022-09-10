const db = require("../config/connection");
const { Product } = require("../models");

const productData = require("./productData.json");

db.once("open", async () => {
  await Product.deleteMany({});
  const products = await Product.insertMany(productData);
  console.log("products seeded!", products);

  process.exit(0);
});