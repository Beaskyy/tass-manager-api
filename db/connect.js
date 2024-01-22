const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://Beasky:Beasky1_@cluster0.m5yen.mongodb.net/task-manager";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTED TO DB"))
  .catch((err) => console.log(err));
