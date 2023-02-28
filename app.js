const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

const app = express();

const { PORT = 3001 } = process.env;
const errorhandler  = require("./utils/error");

mongoose.connect("mongodb://localhost:27017/foodRunDB");

const routes = require("./api/routes/index");

app.use(express.json());
app.use(cors());
app.use("/", routes);


app.use(errorhandler);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return process.exit(1);
  }
  console.log(`
        🚀  Server is running!
        🔉  Listening on port 3001
        📭  Query at http://localhost:3001
    `);
  return err;
});
