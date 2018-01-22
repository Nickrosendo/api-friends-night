const express = require("express"),
  app = express(),
  consign = require("consign"),
  bodyParser = require("body-parser"),
  cors = require("cors");
  require('./database')('localhost/friends-night');

app.use(cors());
app.use(bodyParser.json());
app.set("secret", "Quis custodiet ipsos custodes?");

consign({ cwd: "app" })
  .include("models")
  .then("api")
  .then("routes/auth.js")
  .then("routes")
  .into(app);

module.exports = app;
