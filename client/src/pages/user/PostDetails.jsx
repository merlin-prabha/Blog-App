import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetPostDetailMutation } from "../../redux/api/postsApi";

const PostDetails = () => {
  const [post, setPost] = useState([]);
  const params = useParams();
  const [getPostDetailMutation] = useGetPostDetailMutation();

  useEffect(() => {
    getPostDetails();
  }, []);

  const getPostDetails = async () => {
    const id = params.id;
    console.log(id, "post");

    try {
      const res = await getPostDetailMutation({ id }).unwrap();
      console.log(res, "post res");
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="m-5 p-5 md:px-[25%] bg-gray-100">
      <div className="bg-white p-5">
        {post.post_image && <img src={post.post_image} alt="post" />}
        <div className="!flex flex-col"></div>
        <h1 className="!text-3xl font-bold mt-5">{post.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: post.description }} />
      </div>
    </div>
  );
};

export default PostDetails;
