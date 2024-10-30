import React, { useState } from "react";
import CustomUploadButton from "../../components/userComponents/CustomUploadButton";
import { Editor } from "primereact/editor";
import { useCreatePostMutation } from "../../redux/api/postsApi";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [createPostMutation] = useCreatePostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user, "user");

    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("post_image", image);
      formData.append("created_user", user?._id);

      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1], "data");
      }
      console.log(formData, "image");

      const res = await createPostMutation(formData).unwrap();
      console.log(res);
      if (res.success) {
        setTitle("");
        setDescription("");
        setImage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[100vh] md:px-[10%] flex flex-col items-center md:bg-gray-100">
      <form
        className="!flex flex-col p-10 md:bg-white md:h-[80%] rounded-lg mt-10 md:w-[70%]"
        onSubmit={handleSubmit}
      >
        {/* <CustomUploadButton
          placeholder={"Add a cover image"}
          // value={image}
          onChange={(e) => setImage(e.file)}
        /> */}
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture"
          onChange={(e) => {
            setImage(e.file);
          }}
        >
          <Button type="primary" icon={<UploadOutlined />} className="mt-5">
            Upload
          </Button>
        </Upload>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New post title here..."
          className="pt-5 text-4xl font-bold focus:outline-none font-serif"
        />
        <div className="card pt-7">
          <Editor
            value={description}
            onTextChange={(e) => setDescription(e.htmlValue)}
            style={{ height: "320px" }}
            placeholder="Write your post content here..."
          />
        </div>
        <button
          type="submit"
          className="text-white self-end mt-10 bg-blue-600 p-5 rounded-md"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
