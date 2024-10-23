import React, { useState } from "react";
import CustomUploadButton from "../../components/userComponents/CustomUploadButton";
import { Editor } from "primereact/editor";
import { useCreatePostMutation } from "../../redux/api/postsApi";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [createPostMutation] = useCreatePostMutation()

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      console.log(image, title, description, "image");
      
      const res = await createPostMutation({title, description, image}).unwrap()
      console.log(res);
      
    } catch (error) {
      console.log(error );
      
    }
  }


  return (
    <div className="h-[100vh] md:px-[10%] flex flex-col items-center md:bg-gray-100">
      <form className="!flex flex-col p-10 md:bg-white md:h-[80%] rounded-lg mt-10 md:w-[70%]" onSubmit={handleSubmit}>
        <CustomUploadButton
          placeholder={"Add a cover image"}
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
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
        <button type="submit" className="text-white self-end mt-10 bg-blue-600 p-5 rounded-md">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
