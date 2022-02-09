const express = require("express");
const connectDB = require("./config/db");
const Sentiment = require("./models/Sentiment");
const interval = require("./service/crawler");
const app = express();
connectDB();
interval()
setInterval(interval, 3600000)



const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(``);
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
