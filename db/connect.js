const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://Beasky:Beasky1_@cluster0.m5yen.mongodb.net/task-manager";

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
