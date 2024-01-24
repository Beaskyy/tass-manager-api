const mongoose = require('mongoose')

const connectDB = (url) => {
  url = "mongodb+srv://Beasky:Beasky1_@cluster0.m5yen.mongodb.net/task-manager"
  return mongoose.connect(url)
}

module.exports = connectDB
