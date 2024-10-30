import React, { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {
  FaSearch,
  FaRegBell,
  FaUser,
} from "react-icons/fa";
import CustomInput from "./CustomInput";
import { Link, useNavigate } from "react-router-dom";

const CustomNav = () => {
  
  const [search, setSearch] = useState("");
  
  const navigate = useNavigate();

 

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div className="w-full !fixed z-20 top-0 shadow-md">
      <div
        className={`!flex flex-row justify-between items-center p-5 md:px-[20%] bg-white`}
      >
        <Link to="/home">
          <h1 className="text-2xl self-center font-medium mt-3 font-serif">
            Snapnest
          </h1>
        </Link>
        <div className="md:hidden w-[20%]">
          <div className="!flex flex-row justify-between">
            
              <Link to="/search" className="text-2xl">
                <FaSearch />
              </Link>
           
          
              <Link to="/notification" className="text-2xl">
                <FaRegBell />
              </Link>
           
            <Menu>
              <MenuButton
                className="text-2xl"
                icon={<FaUser />}
                variant="outline"
              >
                <FaUser />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to="/profile">View Profile</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/new">Create Post</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/settings">Settings</Link>
                </MenuItem>

                <MenuItem>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="border-2 bg-blue-600 p-3 rounded-lg text-white"
                  >
                    Logout
                  </button>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        <div className="w-[400px] hidden md:flex pl-[80px] flex-row">
          <CustomInput
            type={"search"}
            placeholder={"Search"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="hidden md:flex flex-row justify-between items-center w-[40%] lg-[25%]">
          <button
            type="button"
            className="hover:text-blue-600 hover:underline md:text-xl font-medium"
          >
            <Link to="/home">Home</Link>
          </button>

          <button
            type="button"
            className="hover:text-blue-600 hover:underline md:text-xl font-medium"
          >
            <Link to="/notification">Notification</Link>
          </button>
          <button
            type="button"
            className="hover:text-blue-600 hover:underline md:text-xl font-medium"
          >
            <Link to="/new">Create</Link>
          </button>

          <Menu>
            <MenuButton
              className="text-2xl"
              // icon={<FaUser />}
              variant="outline"
            >
              <p className="hover:text-blue-600 hover:underline md:text-xl font-medium">
                Profile
              </p>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to="/profile">View Profile</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/new">Create Post</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/settings">Settings</Link>
              </MenuItem>

              <MenuItem>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="border-2 bg-blue-600 p-3 rounded-lg text-white"
                >
                  Logout
                </button>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default CustomNav;
