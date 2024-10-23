const jwt = require("jsonwebtoken");
const userModel = require("../schema/userSchema");

exports.authMiddleware = async (req, res, next) => {
  try {
    const { token } = req.body;

    const decodedToken = jwt.decode(token);

    if (!decodedToken || !decodedToken.userId) {
      return res.status(400).json({
        status: false,
        message: "Invalid token",
      });
    }

    const findUser = await userModel.findById(decodedToken.userId);

    if (!findUser) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    jwt.verify(token, findUser.refresh_token, (err) => {
      if (err) {
        return res.status(401).json({
          status: false,
          message: "Token is not valid",
          error: err,
        });
      }

      return res.status(200).json({
        status: true,
        message: "Token is valid",
      });
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Server error",
      error: error.message,
    });
  }
};
