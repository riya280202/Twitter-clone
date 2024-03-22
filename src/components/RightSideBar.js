import React from "react";
import Avatar from "react-avatar";
import { FaSearch } from "react-icons/fa";
import SuggestionProfile from "./SuggestionProfile";

const RightSideBar = () => {
  return (
    <div className="mt-5 w-[20vw]">
      <div className="px-2 py-2 outline-none border-2 border-grey-200 w-full bg-gray-100 rounded-full flex items-center">
        <FaSearch />
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-100 ml-2 outline-none"
        />
      </div>
      <div className="bg-gray-100 rounded-md px-2 py-1 mt-3">
        <h1 className="font-bold my-3 text-lg">Who to Follow</h1>
        <SuggestionProfile/>
        <SuggestionProfile/>
        <SuggestionProfile/>
        <SuggestionProfile/>
      </div>
    </div>
  );
};

export default RightSideBar;
