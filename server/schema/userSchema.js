const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    generated_otp: {
      type: Number,
      default: "",
    },
    is_otp_verified: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      required: true,
    },
    secretKey: {
      type: String,
      required: true,
    },
    profile_photo: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", UserSchema);
module.exports = userModel;
