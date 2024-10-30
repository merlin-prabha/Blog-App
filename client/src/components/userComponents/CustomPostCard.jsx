import React from 'react'
import { Link } from 'react-router-dom';

const CustomPostCard = ({details}) => {
    const {title, user, comments, likes, created_user, createdAt, _id} = details
  return (
    <div className="bg-white p-5 mb-3 rounded-xl">
      <div className="!flex flex-row">
        <img
          src={
            created_user.profile_photo
              ? `{${created_user.profile_photo}}`
              : "https://res.cloudinary.com/dksovm4dg/image/upload/v1720108545/header_image_grpd3l.png"
          }
          alt="user"
          className="mr-3"
        />
        <div>
          <Link to={`profile/${created_user._id}`}>
            <p className="text-sm">{created_user.name}</p>
          </Link>
          <p className="text-sm">{createdAt}</p>
        </div>
      </div>
      <div className="flex flex-col mt-5">
        <p>{user}</p>
        <Link to={`/post/${_id}`}>
          <p className="text-3xl font-bold">{title}</p>
        </Link>
        <p>{likes} Likes</p>
        <div>
          {/* {comments.length !== 0 ? (
                    comments.map(each => (
                        <div className='bg-gray-100 mb-3 p-5'>
                            <p>{each.name}</p>
                            <p>{each.comment}</p>
                        </div>
                    ))
                ) : ""} */}
        </div>
      </div>
    </div>
  );
}

export default CustomPostCard