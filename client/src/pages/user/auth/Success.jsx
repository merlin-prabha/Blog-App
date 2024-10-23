import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";
const Success = () => (
  <div className="!flex flex-col justify-center items-center h-full pt-60">
    <Result
      status="success"
      title="Verified Successfully!!"
      // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Link to="/home">
          <Button type="primary" key="console">
            Go To Home Page
          </Button>
        </Link>,
        //   <Button key="buy">Buy Again</Button>,
      ]}
    />
  </div>
);
export default Success;
