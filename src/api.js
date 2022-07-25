const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();
let a = "holas"
router.get("/", (req, res) => {
  res.json({
    hello: a
  });
});
router.get("/h", (req, res) => {
  a ="andriy"
  res.json({
    hello: a
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
