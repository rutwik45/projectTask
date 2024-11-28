const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()

const dbHost=process.env.DBHOST

const connectDB = async () => {
  try {
    await mongoose.connect(dbHost, {
      useNewUrlParser: false,
      useUnifiedTopology: false,
    });
    console.log("Connected to MongoDB successfully.");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
