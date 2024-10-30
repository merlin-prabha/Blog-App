const path = require("path");
const postModel = require("../schema/postSchema");
const userModel = require("../schema/userSchema");
const STATUS_CODES = require("../statusCode");

exports.addPost = async (req, res) => {
  try {
    const { title, description, post_image, comments, likes, created_user } =
      req.body;
    console.log(created_user, "body");
    const isUserExist = await userModel.findById({ _id: created_user });

    const image = req.files?.post_image?.map((product) => product.path);

    const tempImagePath = req.files ? image.toString() : "";

    const imagePath = tempImagePath
      ? path.join("public/uploads", title, path.basename(tempImagePath))
      : "";

    if (isUserExist) {
      const post = await postModel.create({
        title,
        description,
        created_user: isUserExist._id,
        post_image: imagePath
          ? `${req.protocol}://${req.get("host")}/${imagePath}`
          : "",
        comments,
        likes,
      });
      return res.status(201).send({
        status: true,
        success: true,
        message: `${title} post created successfully`,
        data: post,
      });
    }
    return res.status(201).send({
      status: true,
      success: true,
      message: `User didn't exist`,
    });
  } catch (error) {
    return res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR.code)
      .send(STATUS_CODES.INTERNAL_SERVER_ERROR.message);
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await postModel
      .find()
      .populate("created_user")
      .sort("-createdAt");

    if (posts) {
      return res.status(200).send({
        success: true,
        message: "Posts retrieved successfully",
        data: posts,
      });
    }
    return res.status(404).send({ success: false, message: "No Posts Found" });
  } catch (error) {
    return res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR.code)
      .send(STATUS_CODES.INTERNAL_SERVER_ERROR.message);
  }
};

exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id, "id");

    const post = await postModel.findById(id).populate("created_user");

    console.log(post, "post");

    if (post) {
      return res.status(200).send({
        success: true,
        message: "Post retrived Successfully!!",
        data: post,
      });
    }
    return res.status(404).send({ success: false, message: "No Post found" });
  } catch (error) {
    return res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR.code)
      .send(STATUS_CODES.INTERNAL_SERVER_ERROR.message);
  }
};
