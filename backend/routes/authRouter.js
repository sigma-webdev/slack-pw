const express = require("express");
const jwtAuth = require("../middleware/jwtAuthentication.js");
const authRouter = express.Router();
const {
  signIn,
  signUp,
  logout,
  forgotPassword,
  resetPassword,
  getUser,
  editUser,
  getUsers
} = require("../controller/authController");

authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);
authRouter.get("/logout", logout);
authRouter.post("/forgot_password", forgotPassword);
authRouter.post("/reset_password/:token", resetPassword);

module.exports = authRouter;
