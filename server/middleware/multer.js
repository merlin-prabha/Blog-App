const multer = require("multer");
const fs = require("fs");
const path = require("path");

const fileType = {
  "image/png": "png",
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = fileType[file.mimetype];
    let uploadError = new Error("Invalid Upload Format");

    if (isValid) {
      uploadError = null;
    }

    const { title } = req.body;

    // Set the destination folder dynamically based on req.body
    const folderPath = path.join(
      "public/uploads",
     title
    );
    fs.mkdirSync(folderPath, { recursive: true });
    cb(uploadError, folderPath);
  },
  filename: function (req, file, cb) {
    const { title } = req.body;

    const fileName = file.originalname.split(" ").join("-");
    const extension = fileType[file.mimetype];
    cb(null, `${title}-(${fileName}).${extension}`);
  },
});

// Export the multer upload middleware to accept 'user_image' field
// const upload = multer({ storage: storage }).fields([
//   { name: "product_image", maxCount: 1 },
//   { name: "product_images", maxCount: 3 },
// ]);

const upload = multer({ storage: storage }).single("profile_photo");

module.exports = upload;
