import React from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa6";
import { FaRegHeart, FaRegBookmark } from "react-icons/fa";

const Tweet = () => {
  return (
    <div className="mt-2 p-2 border-b-2 border-grey-200">
      <div className="flex items-center">
        <Avatar
          src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          size="40"
          round={true}
        />
        <div className="ml-4 w-full">
          <div className="flex items-center">
            <p className="font-bold">Name</p>
            <p className="pl-4 text-gray-300 text-sm">@Username. 1m</p>
          </div>
          <div>
            <p className="text-sm">
              It is a long established fact that a reader will be dIt is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-[80%] mx-auto mt-3 mb-2">
        <div className="flex items-center">
          <div className="hover:bg-green-200 p-2 rounded-full cursor-pointer">
            <FaRegComment />
          </div>

          <p className="text-sm">38</p>
        </div>
        <div className="flex items-center">
          <div className="hover:bg-green-200 p-2 rounded-full cursor-pointer">
            <FaRegHeart />
          </div>
          <p className="text-sm">38</p>
        </div>
        <div className="flex items-center">
          <div className="hover:bg-green-200 p-2 rounded-full cursor-pointer">
            <FaRegBookmark />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
