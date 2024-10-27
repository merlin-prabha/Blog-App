import React, { useState } from "react";
import CustomInput from "../../../components/userComponents/CustomInput";
import { useLoginMutation } from "../../../redux/api/authApi";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [loginMutation, { isSuccess }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, password, "name, password");
    try {
      const res = await loginMutation({ name, password }).unwrap();
      console.log(res);
      if (res.message === "User logged In") {
        navigate("/home");

        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user))
      }
    } catch (error) {
      console.log("Login Error: ", error);
      setError(error.data.message);
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
          className="w-20 self-center rounded-[50%]"
        />
        <h1 className="text-3xl self-center font-medium mt-3 font-serif text-blue-600 ">
          Snapnest
        </h1>

        <div className="mt-5">
          <label className="text-sm font-medium">USERNAME</label>
          <CustomInput
            type={"text"}
            placeholder={"Username"}
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <button
          type="submit"
          className="mt-5 bg-blue-500 text-white p-3 rounded-xl"
        >
          Login
        </button>
        <p className="text-red-500 text-center">{error}</p>
        <p className="mt-3">
          Don't have an account?{" "}
          <Link to="/register">
            <button className="text-blue-500" type="button">
              Register
            </button>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
