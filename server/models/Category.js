const { model, Schema } = require("mongoose");

const categorySchema = new Schema({
  name: String,
  description: String,
});

module.exports = model("Category", categorySchema);
