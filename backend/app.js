const express = require("express");
const app = express();
const authRouter = require("./routes/authRouter.js");
const errorHandler = require("./middleware/errorHandler.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require('express-session');
const MongoStore = require('connect-mongo');

// swagger
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    origin: [process.env.CLIENT_URL, "http://localhost:3000"],
    credentials: true
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use("/api/auth", authRouter);

// ROUTES //

// error handler
app.use(errorHandler);

module.exports = app;
