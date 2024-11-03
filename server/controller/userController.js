const userModel = require("../schema/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const STATUS_CODES = require("../statusCode");
const nodemailer = require("nodemailer");
const path = require("path");

const sendMail = (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "merlinprabha19@gmail.com",
        pass: "shrx ybhf euds fzem",
      },
    });
    var mailOptions = {
      from: "merlinprabha19@gmail.com",
      to: email,
      subject: "Sending Email using Node.js",
      // text: "That was easy!",
      html: `<html>
          <body>
            <h1>This Otp Only Valid 10 Min</h1>
            <h1>${otp}</h1>
          </body>
        </html>`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        // return {message: "User verified Successfully!!"}
      }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.verifyUser = async (req, res) => {
  const { otp, _id } = req.body;

  try {
    const userExist = await userModel.findById(_id);
    console.log(userExist, "user");

    if (userExist) {
      const matchOtp = userExist.generated_otp === parseInt(otp);

      if (matchOtp) {
        const token = jwt.sign(
          { id: userExist._id, name: userExist.name, email: userExist.email },
          userExist.secretKey
        );

        const useUpdate = await userModel.findByIdAndUpdate(
          userExist._id,
          {
            generated_otp: "",
            is_oto_verified: true,
          },
          { new: true, runValidators: true }
        );
        return res
          .status(201)
          .send({ message: "success", data: useUpdate, token: token });
      }
      return res.status(400).send({ message: "Fail Otp" });
    }
    return res.status(STATUS_CODES.BAD_REQUEST.code).send("User Already Exist");
  } catch (error) {
    return res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR.code)
      .send(STATUS_CODES.INTERNAL_SERVER_ERROR.message);
  }
};

exports.addNewUser = async (req, res) => {
  const { name, password, email } = req.body;

  try {
    const userExist = await userModel.findOne({ name });
    if (!userExist) {
      if (password !== "") {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({
          name,
          password: hashedPassword,
          email,
          generated_otp: crypto.randomInt(100000, 999999),
          secretKey: crypto.randomBytes(64).toString("base64"),
        });
        if (newUser) {
          sendMail(newUser.email, newUser.generated_otp);
        }

        return res
          .status(STATUS_CODES.ACCEPTED.code)
          .send({ message: "User Created Successfully", user: newUser });
      }
      return res.status(STATUS_CODES.BAD_REQUEST.code).send("Enter Password");
    }
    return res.status(STATUS_CODES.BAD_REQUEST.code).send("User Already Exist");
  } catch (error) {
    return res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR.code)
      .send(STATUS_CODES.INTERNAL_SERVER_ERROR.message);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    if (users) {
      return res
        .status(STATUS_CODES.ACCEPTED.code)
        .send({ message: "Users list Available", list: users });
    }
    return res
      .status(STATUS_CODES.BAD_REQUEST.code)
      .send("User list not available");
  } catch (error) {
    return res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR.code)
      .send(STATUS_CODES.INTERNAL_SERVER_ERROR.message);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if (user) {
      return res
        .status(STATUS_CODES.ACCEPTED.code)
        .send({ message: "User Available", user });
    }
    return res.status(STATUS_CODES.BAD_REQUEST.code).send("User not available");
  } catch (error) {
    return res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR.code)
      .send(STATUS_CODES.INTERNAL_SERVER_ERROR.message);
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const { profile_photo, name } = req.body;
    const { id } = req.params;
    const user = await userModel.findById(id);
    console.log(req.body, "body");

    const image = req.files?.profile_photo?.map((user) => user.path);

    const tempImagePath = req.files ? image.toString() : "";

    const imagePath = tempImagePath
      ? path.join("public/uploads", title, path.basename(tempImagePath))
      : "";
    

    if (user) {
      const updatedUser = await userModel.findByIdAndUpdate(
        id,
        {
          profile_photo: imagePath
          ? `${req.protocol}://${req.get("host")}/${imagePath}`
          : "",
          name,
        },
        { new: true }
      );
      return res
        .status(201)
        .send({ success: true, message: "profile updated", data: updatedUser });
    }

    return res.status(STATUS_CODES.BAD_REQUEST.code).send("User not available");
  } catch (error) {
    return res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR.code)
      .send(STATUS_CODES.INTERNAL_SERVER_ERROR.message);
  }
};

exports.deleteuserById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const user = await userModel.findByIdAndDelete(id);
    if (user) {
      return res
        .status(STATUS_CODES.ACCEPTED.code)
        .send({ message: "User deleted Successfully!" });
    }
    return res
      .status(STATUS_CODES.NOT_FOUND.code)
      .send({ message: "User not found" });
  } catch (error) {
    return res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR.code)
      .send(STATUS_CODES.INTERNAL_SERVER_ERROR.message);
  }
};

exports.deleteAllUser = async (req, res) => {
  try {
    const user = await userModel.deleteMany();
    if (user.deletedCount !== 0) {
      return res
        .status(STATUS_CODES.ACCEPTED.code)
        .send({ message: "All users are deleted" });
    }
    return res
      .status(STATUS_CODES.NOT_FOUND.code)
      .send({ message: "No users to delete" });
  } catch (error) {
    return res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR.code)
      .send(STATUS_CODES.INTERNAL_SERVER_ERROR.message);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { name, password } = req.body;
    console.log(req.body, "name");

    const userExist = await userModel.findOne({ name });

    if (userExist) {
      const checkPassword = bcrypt.compareSync(password, userExist.password);
      if (!checkPassword) {
        return res
          .status(STATUS_CODES.NOT_FOUND.code)
          .send({ message: "Incorrect Password" });
      } else {
        const token = jwt.sign(
          { id: userExist._id, name: userExist.name, email: userExist.email },
          userExist.secretKey
        );

        return res.status(STATUS_CODES.ACCEPTED.code).send({
          message: "User logged In",
          user: userExist,
          token: token,
        });
      }
    }
    return res
      .status(STATUS_CODES.NOT_FOUND.code)
      .send({ message: "User not found" });
  } catch (error) {
    return res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR.code)
      .send({ message: error });
  }
};
