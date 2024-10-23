import React from "react";
import { Outlet } from "react-router-dom";
import CustomNavbar from "../../../components/userComponents/CustomNavbar";

const Layout = () => {
  return (
    <div>
      <div className="!flex flex-col">
        <CustomNavbar />
        <div className="mt-[100px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
