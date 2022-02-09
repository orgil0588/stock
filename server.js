const express = require("express");
const connectDB = require("./config/db");
const interval = require("./service/crawler");

connectDB();

const port = 8080;

const app = express();
// app.use(interval);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
