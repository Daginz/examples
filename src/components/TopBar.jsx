import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div>
      <div className="w-[100%] px-4 h-[70px] gap-2 bg-[#242526] flex justify-between md:w-full items-center fixed z-[999]">
        <Link to="/"><p className="text-white text-2xl lg:text-3xl font-bold">facebook</p></Link>
        <div className="w-[8%] sm:w-[40%] bg-[#3a3b3c] rounded-full h-10 flex justify-center items-center">
          <BsSearch className="text-[#b0b3b8] pl-2" size={25} />
          <input
            className="h-10 rounded-full md:w-[90%] pl-2 bg-[#3a3b3c] border-0 outline-none text-white pl-4"
            type="text"
            placeholder="Search Facebook"
          />
        </div>

        <div className="flex gap-1 md:gap-4">
          <div className="h-10 w-10 rounded-[50%] bg-[#3a3b3c] flex justify-center items-center">
            <AiOutlineMessage className="text-white" />
          </div>
          <div className="h-10 w-10 rounded-[50%] bg-[#3a3b3c] flex justify-center items-center">
            <IoIosNotificationsOutline className="text-white" />
          </div>

          <Link to="/profile">
          <div className="h-10 w-10 rounded-[50%] bg-white flex justify-center items-center overflow-hidden">
            <img className="w-[100%]" src="./Assets/pelzz.jpg" alt="" />
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
