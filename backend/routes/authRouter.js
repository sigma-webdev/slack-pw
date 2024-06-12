const express = require("express");
const jwtAuth = require("../middleware/jwtAuthentication.js");
const authRouter = express.Router();
const { signUp, confirmEmail } = require("../controller/authController");

authRouter.post("/signup", signUp);
authRouter.post("/confirmemail", confirmEmail);

module.exports = authRouter;
