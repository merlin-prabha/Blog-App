import React, { useEffect, useState } from "react";
import CustomInput from "../../../components/userComponents/CustomInput";
import { useCreateUserMutation } from "../../../redux/api/authApi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserToVerify } from "../../../redux/features/user/verifySlice";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [createUserMutation, { isSuccess }] = useCreateUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, password, email);

    try {
      if (name === "" || password === "" || email === "") {
        setError("Enter valid Details");
      }
      const res = await createUserMutation({ name, password, email }).unwrap();
      console.log(res.status);
      dispatch(addUserToVerify(res));
      setError("");

      console.log(res, "res");

      if (res.message == "User Created Successfully") {
        navigate("/verify", { state: { userId: res?.user?._id } });
      }
    } catch (error) {
      console.log("Register Error: ", error);
      setError(error.data);
    }
  };
  return (
    <div className="!flex flex-row justify-center items-center h-screen">
      <form
        className="border-2 p-10 shadow-xl flex flex-col w-[50%]"
        onSubmit={handleSubmit}
      >
        <img
          src="https://res.cloudinary.com/dksovm4dg/image/upload/v1729094488/fuwqpmgceufm0jysqtyx.png"
          alt="logo"
          className="w-20 self-center"
        />
        <h1 className="text-3xl self-center font-medium mt-3 font-serif text-blue-600 ">
          Snapnest
        </h1>
        <div className="mt-5">
          <label className="text-sm font-medium">NAME</label>
          <CustomInput
            type={"text"}
            placeholder={"Username"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label className="text-sm font-medium">EMAIL</label>
          <CustomInput
            type={"text"}
            placeholder={"Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-5 flex flex-col">
          <label className="text-xm font-medium">PASSWORD</label>
          <CustomInput
            type={showPassword ? "text" : "password"}
            placeholder={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="text-blue-500 text-xs mt-3 self-end"
            onClick={() => setShowPassword(!showPassword)}
          >
            Show Password
          </button>
        </div>
        {/* <Link to="/verify"> */}
        <button
          type="submit"
          className="mt-5 bg-blue-500 text-white p-3 rounded-xl"
        >
          REGISTER
        </button>
        {/* </Link> */}
        {error && <p className="text-red-500 text-center mt-3">{error}</p>}
        <p className="mt-3">
          Already have an account?
          <Link to="/login">
            <button className="text-blue-500" type="button">
              Login
            </button>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
