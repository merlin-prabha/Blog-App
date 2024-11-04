import React, { useState } from 'react'
import { useUpdateUserMutation } from '../../redux/api/authApi';
import CustomInput from '../../components/userComponents/CustomInput';

const Settings = () => {

    const [updatedName, setUpdatedName] = useState("");
    const [updatedImage, setUpdatedImage] = useState("");
    const [updateUserMutation] = useUpdateUserMutation();

    const localUser = JSON.parse(localStorage.getItem("user"));
    const id = localUser._id

    const handleUpdate = async (e) => {
      e.preventDefault();
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
          formData,
        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    
  return (
    <div className="bg-gray-100  h-[100vh] p-10">
      <div className="md:mx-[20%] bg-white">
        <form className="!flex flex-col p-5" onSubmit={handleUpdate}>
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
      </div>
    </div>
  );
}

export default Settings