const express = require("express");
const bp = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const Sentiment = require("./models/Sentiment");
const crawler = require("./service/crawler");
const app = express();
connectDB();

const port = process.env.PORT || 8080;

crawler();
const intervaler = () => {
  setInterval(() => {
    crawler();
  }, 3600000);
};

const logger = () => {
  setInterval(() => {
    console.log(`running ${new Date()}`);
  }, 600000);
};

logger();
intervaler();

app.use(bp.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello world");
  console.log("first");
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
