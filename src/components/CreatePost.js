import React from "react";
import Avatar from "react-avatar";
import { FaRegImage } from "react-icons/fa";

const CreatePost = () => {
  return (
    <div className="">
      <div className="flex justify-around items-center border-b-2 border-grey-200">
        <p className="text-lg text-gray-600 font-bold cursor-pointer hover:bg-gray-200 w-full text-center px-3 py-2">
          For you
        </p>
        <p className="text-lg text-gray-600 font-bold cursor-pointer hover:bg-gray-200 w-full text-center px-3 py-2">
          {" "}
          Following
        </p>
      </div>
      <div className="pt-3 px-2 border-b-2 border-gray-200">
        <div className=" flex items-center">
          <Avatar
            src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            size="40"
            round={true}
          />
          <input
            type="text"
            placeholder="What is Happening?"
            className="ml-5 w-full outline-none border-none text-lg"
          />
        </div>
        <div className="mt-7 mb-3 flex items-center justify-between">
          <FaRegImage size={"24"}/>
          <button className="bg-[#1D9BF0] px-5 py-2 border-none rounded-md text-white text-lg">Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
