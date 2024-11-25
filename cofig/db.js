const mongoose = require("mongoose");
const DB_NAME = require("../utils/constants");
// function for mongodb database connection
const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    console.log(`Connected to Database: ${mongoose.connection.host}`);
  } catch (error) {
    console.log("DB connection failed", error);
  }
};

module.exports = connectDb;
