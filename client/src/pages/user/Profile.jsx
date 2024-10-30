import React, { useEffect, useState } from "react";
import { useGetUserDetailMutation } from "../../redux/api/authApi";

const Profile = () => {
  const [user, setUser] = useState("");

  const [getUserDetailsMutation] = useGetUserDetailMutation();

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const jwt = localStorage.getItem("token");

    const id = user._id;
    console.log(id, jwt, "id");

    try {
      const res = await getUserDetailsMutation({ id }).unwrap();
      console.log(res, "res");
      setUser(res.user);
      // const d = new Date();
      // log(d, "d");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(new Date(user.createdAt), "new Date(user.createdAt)");

  return (
    <div className="!flex flex-col bg-gray-100 h-[100vh]">
      <div className="!flex flex-col">
        <div className="pt-10 p-5 flex flex-col bg-black rounded-b-3xl">
          <img
            src={
              user.profile_photo
                ? `${user.profile_photo}`
                : "https://res.cloudinary.com/dksovm4dg/image/upload/v1720108545/header_image_grpd3l.png"
            }
            alt="user"
            className="w-20 self-start md:self-center"
          />
        </div>
        <div className=" md:px-[20%] !flex flex-col bg-white rounded-lg">
          <button
            type="button"
            className="bg-black text-white p-3 rounded-lg self-end mt-5 mr-5"
          >
            Edit
          </button>
          <div className="p-5">
            <h1 className="text-4xl font-bold font-mono mb-3">{user.name}</h1>
            <p>Joined on {new Date(user.createdAt).getFullYear()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
