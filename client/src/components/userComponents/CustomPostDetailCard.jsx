import React from "react";

const CustomPostDetailCard = ({ details }) => {
  const { title, description, post_image, comments, likes, created_user } =
    details;
  const { name, comment } = comments;
  return (
    <div>
      <div>
        {post_image ? <img src={post_image} alt="image" /> : ""}
        <p className="text-3xl font-bold">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CustomPostDetailCard;
