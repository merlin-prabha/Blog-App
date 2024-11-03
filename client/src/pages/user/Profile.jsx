import React, { useEffect, useState } from "react";
import {
  useGetUserDetailMutation,
  useUpdateUserMutation,
} from "../../redux/api/authApi";
import CustomInput from "../../components/userComponents/CustomInput";

const Profile = () => {
  const [user, setUser] = useState("");
  const [editClicked, setEditClicked] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedImage, setUpdatedImage] = useState("");

  const [getUserDetailsMutation] = useGetUserDetailMutation();
  const [updateUserMutation] = useUpdateUserMutation();

  const localUser = JSON.parse(localStorage.getItem("user"));
  const id = localUser._id;

  const localJwt = localStorage.getItem("token");

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const res = await getUserDetailsMutation({ id }).unwrap();
      setUser(res.user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      console.log(id, updatedImage, updatedName);

      const formData = new FormData();

      formData.append("name", updatedName);
      formData.append("profile_photo", updatedImage);
     

      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1], "data");
      }
      console.log(formData, "image");
      
      const res = await updateUserMutation({
        id,
        formData
      });
      console.log(res);
      
    } catch (error) {
      console.log(error);
    }
  };

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
            onClick={() => setEditClicked(!editClicked)}
          >
            Edit
          </button>
          <div className="p-5">
            <h1 className="text-4xl font-bold font-mono mb-3">{user.name}</h1>
            <p>Joined on {new Date(user.createdAt).getFullYear()}</p>
          </div>
          {editClicked && (
            <form className="!flex flex-col m-5" onSubmit={handleUpdate}>
              <CustomInput
                type={"text"}
                placeholder={"Enter Name"}
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
              />
              <input
                type="file"
                className="my-5"
                onChange={(e) => setUpdatedImage(e.target.files)}
              />
              <button
                type="submit"
                className="border-2 bg-black text-white p-3 rounded-md"
              >
                Update
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
