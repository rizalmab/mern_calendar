//* Dependencies
const { urlencoded } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path"); //this is required for deployment in Heroku. Herman: Just put it in
const holidaysController = require("./controllers/holidaysController");

//* config
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

//* CONNECT MONGODB
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongodb not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose at " + MONGODB_URI);
});

//* Middleware
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./client/build"))); // this is needed for deployment in Heroku
app.use("/api/holidays", holidaysController)

//* routes
app.use("/api/test", (req, res) => {
  res.send("test route is working!");
});

// this is needed for Heroku deployment
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => {
  console.log("app is listening on port: " + port);
});
