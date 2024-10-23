import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {
  FaHome,
  FaSearch,
  FaRegBell,
  FaRegPlusSquare,
  FaUser,
} from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";

import { useDispatch, useSelector } from "react-redux";
import { MdLightMode, MdDarkMode } from "react-icons/md";
// import { changeTheme } from "../../redux/features/user/themeSlice";
import CustomInput from "./CustomInput";
import { Link, useNavigate } from "react-router-dom";

const CustomNav = () => {
  // const [theme, setTheme] = useState(true);
  const [search, setSearch] = useState("");
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // const themeClass = useSelector((state) => state.theme.theme);

  // useEffect(() => {
  //   dispatch(changeTheme(theme));
  // });

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div className="w-full !fixed z-20 top-0 shadow-md">
      <div
        className={`!flex flex-row justify-between items-center p-5 md:px-[20%] bg-white`}
      >
        {/* {${
          themeClass === false
            ? "bg-gray-800 text-white"
            : "bg-white"
        }} */}
        <h1 className="text-2xl self-center font-medium mt-3 font-serif text-blue-600 ">
          Snapnest
        </h1>
        <div className="md:hidden w-[20%]">
          <div className="!flex flex-row justify-between">
            <button type="button" className="text-2xl">
              <Link to="/search">
                <FaSearch />
              </Link>
            </button>
            <button type="button" className="text-2xl">
              <Link to="/notification">
                <FaRegBell />
              </Link>
            </button>
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
                {/* <MenuItem>
                  <button
                    type="button"
                    // onClick={() => {
                    //   setTheme(!theme);
                    // }}
                  >
                    Switch Theme
                  </button>
                </MenuItem> */}
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
          {/* <Menu>
            <MenuButton
              className="text-blue-800"
              icon={<GiHamburgerMenu />}
              variant="outline"
            >
              <GiHamburgerMenu />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to="/home">Home</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/search">Search</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/notification">Notification</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/new">Create</Link>
              </MenuItem>
              <MenuItem>
                <button
                  type="button"
                  onClick={() => {
                    setTheme(!theme);
                  }}
                >
                  Switch Theme
                </button>
              </MenuItem>
              <MenuItem>
                <Link to="/profile">Profile</Link>
                <button
                  type="button"
                  className="p-3 mt-5 w-full rounded-lg text-white !bg-violet-500"
                >
                  Profile
                </button>
              </MenuItem>
            </MenuList>
          </Menu> */}
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
          {/* <button
            type="button"
            className="hover:text-blue-600 hover:underline  md:text-xl font-medium"
          >
            Work
          </button> */}

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

          {/* <button
            type="button"
            className="p-3 rounded-lg self-center text-white !bg-violet-500 md:text-xl font-medium"
          >
            Logout
          </button> */}
          {/* <button
            type="button"
            className="hover:text-blue-600 hover:underline md:text-xl font-medium"
          >
            <Link to="/profile">Profile</Link>
          </button> */}
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
              {/* <MenuItem>
                <button
                  type="button"
                  // onClick={() => {
                  //   setTheme(!theme);
                  // }}
                >
                  Switch Theme
                </button>
              </MenuItem> */}
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
          {/* <button
            type="button"
            className="text-2xl"
            onClick={() => {
              setTheme(!theme);
            }}
          >
            {theme ? <MdDarkMode /> : <MdLightMode />}
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CustomNav;
