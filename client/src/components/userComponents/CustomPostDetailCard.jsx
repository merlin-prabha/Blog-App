import React from "react";
import { Link } from "react-router-dom";

const CustomPostDetailCard = ({ details }) => {
  const { title, description, post_image, comments, likes, created_user, _id } =
    details;
  const { name, comment } = comments;
  console.log(details, "details");
  
  return (
    <div>
      <div>
        {post_image ? <img src={post_image} alt="image" /> : ""}
        <Link to={`/post/${_id}`}>
          <p className="text-3xl font-bold">{title}</p>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CustomPostDetailCard;
