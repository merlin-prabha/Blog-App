import React, { useEffect, useState } from "react";
import { useGetUserDetailMutation } from "../../redux/api/authApi";

const Profile = () => {
  const [userDetails, setUserDetails] = useState("");
  const [token, setToken] = useState("")

  const [getUserDetailsMutation] = useGetUserDetailMutation()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUserDetails(user);
    const jwt = localStorage.getItem("token")
    setToken(jwt)

    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    const id = userDetails._id;
    try {
         const res = await getUserDetailsMutation({ id, token }).unwrap();
        console.log(res, "res token");
        
        } catch (error) {
        console.log(error);
        
    }
  };
  return <div>Profile</div>;
};

export default Profile;
