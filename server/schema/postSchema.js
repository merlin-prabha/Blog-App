const { default: mongoose } = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    post_image: {
      type: String,
      default: "",
    },
    created_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comments: {
      type: String,
      default: "",
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const postModel = mongoose.model("Post", PostSchema);
module.exports = postModel;