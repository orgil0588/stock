const express = require("express");
const connectDB = require("./config/db");
const Sentiment = require("./models/Sentiment");
const interval = require("./service/crawler");

connectDB();
interval()
// commit
const port = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", async (req, res) => {
  try {
    const data = await Sentiment.find();
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
