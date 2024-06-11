const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "First Name is required"],
      maxLength: [50, "Name must be less than 50"]
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true
    },
    password: {
      type: String,
      required: [true, "password is required"],
      select: false
    },
    profileImage: new Schema(
      {
        imageId: { type: String, required: true },
        url: { type: String, required: true }
      },
      { _id: false }
    ),
    forgotPasswordExpiry: String,
    forgotPasswordExpiry: Date
  },
  {
    timestamps: true
  }
);
//  search index on all field
userSchema.index({ "$**": "text" });

// challenge 1 - encrypt password - hooks
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// add more features directly to your schema
userSchema.methods = {
  //compare password
  comparePassword: async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  }
};

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
