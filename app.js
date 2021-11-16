const express = require("express");
const axios = require("axios");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 9000
const bodyParser = require('body-parser')
let server;

require("dotenv").config();

// Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true, limit: '20mb'}))
app.use(bodyParser.json({limit: '20mb'}))

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("Database connection established");
}).catch(err => {
    console.log("Error connecting to the mongoDB instance", err)
});
app.use(express.json());

server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
