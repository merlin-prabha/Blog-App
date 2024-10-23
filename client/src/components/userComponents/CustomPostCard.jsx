import React from 'react'

const CustomPostCard = ({details}) => {
    const {title, user, comments, likes} = details
  return (
    <div className='bg-white p-5 mb-3 rounded-xl'>
        <div className='flex flex-col'>
            <p>{user}</p>
            <p className='text-3xl font-bold'>{title}</p>
            <p>{likes} Likes</p>
            <div>
                {comments ? (
                    comments.map(each => (
                        <div className='bg-gray-100 mb-3 p-5'>
                            <p>{each.name}</p>
                            <p>{each.comment}</p>
                        </div>
                    ))
                ) : ""}
            </div>
        </div>
    </div>
  )
}

export default CustomPostCard