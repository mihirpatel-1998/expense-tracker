const express = require('express');
require("dotenv").config();
const cors = require('cors');
const logger = require('morgan');
const http = require("http");
const routes = require("./routes/index");
const db = require('./config/database')

const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);


const server = http.createServer(app);
console.log(`Server Started at PORT ${process.env.port}`)
server.listen(process.env.port)