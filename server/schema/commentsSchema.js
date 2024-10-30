const { default: mongoose } = require("mongoose");

const CommentsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },

}, {timestamps: true});

const commentModel = mongoose.model("Comment", CommentsSchema)
module.exports = commentModel