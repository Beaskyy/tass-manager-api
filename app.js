const express = require("express");
const app = express();
require("./db/connect")

const tasks = require("./routes/task");

app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Task manager app");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

app.listen(port, console.log(`Server is listening on ${port}...`));
