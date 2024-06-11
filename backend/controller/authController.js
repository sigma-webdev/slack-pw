const userModel = require("../model/userModel.js");
const CustomError = require("../utils/customError.js");
const cookieOptions = require("../utils/cookieOptions.js");

/******************************************************
 * @SIGNUP
 * @route /api/auth/signUp
 * @description   singin function for creating new user
 * @body userName,  email, password ,confirmPassword
 * @returns User Object
 ******************************************************/

const signUp = async (req, res, next) => {
  const data = req.body;
  try {
    const userInfo = new userModel(data);
    const result = await userInfo.save();
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    return next(error);
  }
};

/******************************************************
 * @SIGIN
 * @route /api/auth/signIN
 * @description  returns user object of the cradentials is correct with token
 * @body  email, password
 * @returns User Object
 ******************************************************/

const signIn = async (req, res, next) => {
  const { password, email } = req.body;
  if (!email || !password) {
    return next(new CustomError("Please fill all fields", 400));
  }

  try {
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return next(new CustomError("you are not registered", 400));
    }

    const isPasswordMatched = await user.comparePassword(password);
    if (isPasswordMatched) {
      const token = user.getJwtToken();
      user.password = undefined;
      res.cookie("Token", token, cookieOptions);
      return res.status(200).json({
        success: true,
        token: token,
        data: user
      });
    } else {
      return next(
        new CustomError("Invalid credentials - incorrect password", 400)
      );
    }
  } catch (error) {
    return next(error);
  }
};

const logout = async (req, res, next) => {};

const forgotPassword = async (req, res, next) => {};



const resetPassword = async (req, res, next) => {};

module.exports = {
  signUp,
  signIn,
  logout,
  forgotPassword,
  resetPassword
};
