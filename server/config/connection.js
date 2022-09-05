const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://mongouser:SYU4vFKFyPugtmo4@cluster0.41g20xy.mongodb.net/googlebooks" ||
    "mongodb://127.0.0.1:27017/googlebooks",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
