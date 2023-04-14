
import React from "react";
import {
  BsThreeDots,
  BsFillEmojiSunglassesFill,
  BsFillHandThumbsUpFill,
  BsHandThumbsUp,
  BsDot,
} from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { GiEternalLove } from "react-icons/gi";
import { BiComment } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";
import { FaGlobeAsia } from "react-icons/fa";

const Timeline = () => {
  return (
    <div className="w-[100%] md:w-[100%] h-[475px] bg-[#242526] text-white rounded ">
      <div className="flex justify-between items-center px-4 pt-4">
        {" "}
        <div className="flex gap-4">
          <div
            style={{
              backgroundImage:
                "url('./Assets/pelzz.jpg')",
            }}
            className="bg-cover bg-center bg-white w-[45px] h-[45px] rounded-full cursor-pointer"
          ></div>

          <div className="flex flex-col ">
            <h5 className="text-[16px] font-semibold cursor-pointer">
              Oluwapelumi
            </h5>
            <div className="flex text-[#b0b3b8] items-center">
              <span className="text-[12px]">20m</span>
              <span className="text-[12px]">
                <BsDot />
              </span>
              <span className="text-[12px]">
                <FaGlobeAsia />
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 ">
          <span className="cursor-pointer">
            <BsThreeDots size={25} />
          </span>
          <span className="cursor-pointer">
            <IoMdClose size={25} />
          </span>
        </div>
      </div>

      <div className="mt-2 px-4">
        <p>All things are working together for my good</p>
        <p className="text-blue-500">#allthings #good</p>
      </div>

      <div
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/01/08/72/84/360_F_108728405_McSMSc9K23A64Go54fdvjZy4zePCylJB.webp')",
        }}
        className="bg-cover bg-center w-full h-[220px] mt-2"
      ></div>

      <div className="mt-2 px-4 text-[#b0b3b8] flex justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-white bg-blue-500 rounded-full p-[3px]">
            <BsFillHandThumbsUpFill size={10} />
          </span>
          <span className="bg-red-500 text-white rounded-full p-[3px]">
            <GiEternalLove size={10} />
          </span>
          <span className="text-yellow-500">
            {" "}
            <BsFillEmojiSunglassesFill />{" "}
          </span>
          <p>James Bello and 20 others</p>
        </div>
        <p className="cursor-pointer">200 comments</p>
      </div>

      <div className="mt-2 mx-4 bg-[#3e4042] h-[0.1px] "></div>

      <div className="flex justify-between px-16 text-[#b0b3b8] mt-[8px] font-semibold">
        <span className="flex items-center gap-2 cursor-pointer">
          <BsHandThumbsUp size={20} /> Like
        </span>
        <span className="flex items-center gap-2 cursor-pointer">
          <BiComment size={20} /> Comment
        </span>
        <span className="flex items-center gap-2 cursor-pointer">
          <TbShare3 size={20} /> Share
        </span>
      </div>

      <div className="mt-2 mx-4 bg-[#3e4042] h-[0.1px] mb-2"></div>

      <div className="px-4 text-[#b0b3b8]">
        <span className="hover:underline cursor-pointer">
          View more comments
        </span>
      </div>
    </div>
  );
};

export default Timeline;


