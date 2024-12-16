"use client";

import Image from "next/image";
import { FiSearch, FiSettings } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex items-center Plus_Jakarta_Sans justify-between px-6 py-4 border-b-gray-200 bg-white">
      <div className="flex items-center gap-16">
        <div onClick={() => window.location.href = "/"} className="text-blue-600 font-semibold text-3xl hover:cursor-pointer">
          MORENT
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-96 gap-2 bg-gray-100 px-4 py-2 rounded-full">
          <FiSearch className="text-gray-500 mr-2 w-6 h-6" />
          <input
            type="text"
            placeholder="Search something here"
            className="flex-grow bg-transparent outline-none text-sm"
          />
          <Image
            src="/filter.png" // Replace with your profile image path
            alt="filter logo" 
            width={20}
            height={20}
            />
        </div>
      </div>
      

      {/* Icons */}
      <div className="flex items-center gap-6">
        <BsHeart className="text-gray-500 text-lg cursor-pointer" />
        <div className="relative">
          <IoIosNotifications className="text-gray-500 text-lg cursor-pointer" />
          <span className="absolute top-0 right-0 bg-red-500 w-2.5 h-2.5 rounded-full"></span>
        </div>
        <FiSettings className="text-gray-500 text-lg cursor-pointer" />
        {/* Profile Image */}
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="/Profile.png" // Replace with your profile image path
            alt="Profile"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
