import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomPostCard from "../../components/userComponents/CustomPostCard";
// import { useCreatePostMutation } from "../../redux/api/postsApi";
// import { useGetAllUserMutation } from "../../redux/api/authApi";
// import Cookies from "js-cookie";
import { useGetAllPostMutation } from "../../redux/api/postsApi";



// const [createPostMutation] = useCreatePostMutation()

// useEffect(() => {
//   getPosts()
// })

// const getPosts = async() => {
//   try {
//     // const res = await createPostMutation({})
//   } catch (error) {
//     console.log(error);

//   }
// }

const Home = () => {
 
    const [getAllpostMutation] = useGetAllPostMutation();

    const [posts, setPosts] = useState([])

    useEffect(() => {
      getAllPost();
    }, []);

    const getAllPost = async () => {
      // const res = await getAllpostMutation().unwrap();
      // console.log(res);

      const {data} = await getAllpostMutation()
      console.log(data, "data");
      setPosts(data.data)
  };
  return (
    <div className="h-[100vh] md:px-[30%] p-10 bg-gray-100">
      <div>
        {posts.map((each) => (
          <CustomPostCard details={each} />
        ))}
      </div>
    </div>
  );
};

export default Home;
