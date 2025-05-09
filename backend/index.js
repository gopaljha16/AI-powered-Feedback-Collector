require("dotenv").config();
const express = require("express");
const database = require("./config/database");
const app = express();

app.use(express.json());

