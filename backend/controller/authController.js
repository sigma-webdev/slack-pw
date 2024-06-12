const userModel = require("../model/userModel.js");
const CustomError = require("../utils/customError.js");
const cookieOptions = require("../utils/cookieOptions.js");
const emailValidator = require("email-validator");
const sendEmail = require("../utils/sendEmail.js");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");

/******************************************************
 * @SIGNUP
 * @route
 * @description
 * @body
 * @returns
 ******************************************************/

const signUp = async (req, res, next) => {
  const { email } = req.body;
  if (!email) return new CustomError("Please Enter Email", 404);
  const isEmailValid = emailValidator.validate(email);
  if (!isEmailValid) return new CustomError("Please Enter valid Email", 404);

  try {
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false
    });
    const hashOtp = await bcrypt.hash(otp, 10);

    const isUserExist = await userModel.findOne({ email: email });

    if (isUserExist) {
      await userModel.findOneAndUpdate(
        { email: email },
        { hashOtp: hashOtp, hashOtpExpiry: Date.now() + 20 * 60 * 1000 }
      );
    } else {
      await userModel.create({
        email,
        hashOtp,
        hashOtpExpiry: Date.now() + 20 * 60 * 1000 // 20min
      });
    }

    const subject = "Slack confirmation code";
    const message = `Your confirmation code is below — enter it in your open browser window and we'll help you get signed in. <br> ${otp}`;
    await sendEmail(email, subject, message);

    // if email sent successfully send the success response
    // sent success message
    res.status(200).json({
      success: true,
      message: "OTP send successfully with"
    });
  } catch (error) {
    res.status(200).json({
      success: true,
      message: error
    });
  }
};

const confirmEmail = async (req, res, next) => {
  const { otp, email } = req.body;

  try {
    const user = await userModel.findOne("email", email);
    if (!user) return new CustomError("user not found", 404);

    const isValidOtp = await bcrypt.compare(otp, user.password);

    if (!isValidOtp || user.hashOtpExpiry > new Date()) {
      return new CustomError("invalid OTP or OTP expired", 404);
    }
    const token = userModel.getJwtToken();
    res.cookie("Token", token, cookieOptions);
    return res.status(200).json({
      success: true,
      token: token
    });
  } catch (error) {
    res.status(404).json({
      success: false
    });
  }
};

module.exports = {
  signUp,
  confirmEmail
};
