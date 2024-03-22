import React from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import { IoBookmarkSharp, IoNotifications, IoHome, IoLogOutOutline    } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <div className="w-[20vw] p-3 pt-0">
      <div className="mt-5">
        <div>
          <img
            src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10809.jpg"
            alt="Twitter-Logo"
            width={"40px"}
          />
        </div>
        <div className="my-4">
          <Link to="/" className="flex items-center my-3 px-2 py-3 rounded-md hover:bg-gray-200 cursor-pointer">
            <IoHome  size={"24px"} />
            <span className="text-xl ml-2 font-semibold">Home</span>
          </Link>
          <div className="flex items-center my-3 px-2 py-3 rounded-md hover:bg-gray-200 cursor-pointer">
            <FaSearch size={"24px"} />
            <span className="text-xl ml-2 font-semibold">Explore</span>
          </div>
          <div className="flex items-center my-3 px-2 py-3 rounded-md hover:bg-gray-200 cursor-pointer">
            <IoNotifications  size={"24px"}/>
            <span className="text-xl ml-2 font-semibold">Notifications</span>
          </div>
          <div className="flex items-center my-3 px-2 py-3 rounded-md hover:bg-gray-200 cursor-pointer">
            <IoBookmarkSharp size={"24px"} />
            <span className="text-xl ml-2 font-semibold">Boookmarks</span>
          </div>
          <Link to="/profile" className="flex items-center my-3 px-2 py-3 rounded-md hover:bg-gray-200 cursor-pointer">
            <FaUser  size={"24px"}/>
            <span className="text-xl ml-2 font-semibold">Profile</span>
          </Link>
          <div className="flex items-center my-3 px-2 py-3 rounded-md hover:bg-gray-200 cursor-pointer">
            <MdLogout    size={"24px"}/>
            <span className="text-xl ml-2 font-semibold">Logout</span>
          </div>
          <button className="rounded-full font-bold bg-blue-600 text-white my-2 px-2 py-3 w-[100%]">POST</button>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
