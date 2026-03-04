const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB Connected");
};

module.exports = connectDB;

//qtechSolution
//GC6TFvCatDK43vZU
