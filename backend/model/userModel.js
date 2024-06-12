const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    userName: {
      type: String,
      maxLength: [50, "Name must be less than 50"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true
    },

    messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
    profileImage: new Schema(
      {
        imageId: { type: String, required: true },
        url: { type: String, required: true }
      },
      { _id: false }
    ),
    hashOtp: String,
    hashOtpExpiry: Date
  },
  {
    timestamps: true
  }
);

// add more features directly to your schema
userSchema.methods = {
  //generate JWT TOKEN
  getJwtToken: function () {
    return JWT.sign(
      {
        _id: this._id
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRY
      }
    );
  }
};

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
