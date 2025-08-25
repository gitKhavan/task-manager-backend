require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { logger } = require("./src/middleware/logger");

const userRouter = require("./src/routers/userRouter")

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);


app.get("/", (req, res) => {
  res.status(200).send("Welcome!");
});
app.use("/api/users",userRouter);

module.exports = {
  app
};