import React, { useState } from "react";
import { InputOtp } from "primereact/inputotp";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { useVerifyUserMutation } from "../../../redux/api/authApi";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const VerifyOTP = () => {
  const { state } = useLocation();

  const id = state?.userId;
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [verifyUser] = useVerifyUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await verifyUser({ otp, id }).unwrap();
      console.log(res, "verify res");
      
      console.log(res.data, "res user");
      console.log(JSON.stringify(res.data), "stringify");
      


      if (res.message === "success") {
        
        localStorage.setItem("token", res.token);
        localStorage.setItem("user",JSON.stringify(res.data))
        navigate("/success");
      }
    } catch (error) {
      console.log("Verify Error: ", error);
      setError(error.data.message);
    }
  };
  return (
    <div className="!flex flex-col justify-center items-center h-[100vh]">
      <form
        className="!border-2 border-blue-500 rounded-xl p-10 flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <h1 className="!text-3xl font-bold my-5">OTP Verification</h1>
        <p className="!text-lg mb-5">Enter OTP sent to {"email"}</p>
        <div className="card flex justify-content-center border-2 p-5">
          <InputOtp
            className="otp"
            value={otp}
            length={6}
            onChange={(e) => setOtp(e.value)}
          />
        </div>
        {/* <div className="!flex flex-row justify-between">
          <PinInput className="!flex flex-row justify-between" onChange={(e) => setTokens(e.target.value)}>
            <PinInputField className="mr-5" />
            <PinInputField className="mr-5" />
            <PinInputField className="mr-5" />
            <PinInputField className="mr-5" />
          </PinInput>
        </div> */}
        <button
          type="submit"
          className="text-white bg-blue-500 p-2 mt-5 self-stretch rounded-lg"
        >
          Verify
        </button>
        <p className="text-red-500 text-center">{error}</p>
      </form>
    </div>
  );
};

export default VerifyOTP;
