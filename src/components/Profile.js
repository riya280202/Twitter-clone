import React from "react";
import Avatar from "react-avatar";
import { IoMdArrowBack } from "react-icons/io";
import {Link} from "react-router-dom"

const Profile = () => {
  return (
    <div className="w-[40vw] m-4 mt-0 border-l-2 border-r-2 border-gray-200">
      <div>
        <div className="flex items-center">
          <Link to="/" className="p-2 pl-0 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <IoMdArrowBack size={"30px"} />
          </Link>

          <div className="ml-6">
            <h1 className="font-bold text-lg">Riya bansal</h1>
            <p className="text-sm">10 Post</p>
          </div>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUJbKHl5TzfvqIzC7KbblWsERVLM_K69BKQ&usqp=CAU"
          className="w-full h-[35vh]"
        />
        <div className="absolute top-[11rem] ml-3 border-4 border-white rounded-full">
        <Avatar
            src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            size="120"
            round={true}
          />
        </div>
        <div className="text-right m-2">
          <button className="px-3 py-1 border border-gray-400 rounded-full hover:bg-gray-200">Edit Profile</button>
        </div>
        <div className="m-4">
          <h1 className="text-lg font-bold">Riya Bansal</h1>
          <p>@Username</p>
        </div>
        <div className="m-4 mt-2 text-sm">
          <p>readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
