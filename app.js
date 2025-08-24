require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { logger } = require("./middlewares/logger");

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger)


app.get("/", (req, res) => {
  res.status(200).send("Welcome!");
});

module.exports = {
  app
};