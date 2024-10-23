import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";

const props = {
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  listType: "picture",
  beforeUpload(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const img = document.createElement("img");
        img.src = reader.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          ctx.fillStyle = "red";
          ctx.textBaseline = "middle";
          ctx.font = "33px Arial";
          ctx.fillText("Ant Design", 20, 20);
          canvas.toBlob((result) => resolve(result));
        };
      };
    });
  },
};


const CustomUploadButton = ({ placeholder }) => (
  <Upload {...props}>
    <Button>{placeholder}</Button>
  </Upload>
);
export default CustomUploadButton;
