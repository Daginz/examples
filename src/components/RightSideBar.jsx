import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdSmartDisplay, MdGroups } from "react-icons/md";
import { ImClock } from "react-icons/im";
import { BsFillCalendar2MinusFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

const RightSideBar = () => {
  return (
    <div className="bg-[#18191a] w-[20.8%] h-[1000px] hover:overflow-y-scroll hidden lg:block">
      <div className="w-[100%]">
        <div className="text-white font-semibold flex pt-4 items-center mx-4">
          <div className="w-[25px] h-[25px] rounded-full">
            <FaUserFriends className="w-[25px] h-[25px]" size={35} />
          </div>
          <h5 className="ml-4">Home</h5>
        </div>

        <Link to="/profile">
          <div className="text-white font-semibold flex pt-4 items-center mx-4 cursor-pointer">
            <div
              style={{
                backgroundImage:
                  "url('./Assets/pelzz.jpg')",
              }}
              className="w-[25px] h-[25px] rounded-full bg-cover bg-center"
            ></div>
            <h5 className="ml-4">Oluwapelumi Adetoye</h5>
          </div>
        </Link>

        <div className="my-6 mx-4 bg-[#3a3b3c] h-[0.1px] mb-2"></div>
        <div className="text-white font-semibold flex pt-4 items-center mx-4">
          <div className="w-[25px] h-[25px] rounded-full">
            <FaUserFriends className="w-[25px] h-[25px]" size={35} />
          </div>
          <h5 className="ml-4">Friends</h5>
        </div>
        <div className="text-white font-semibold flex pt-4 items-center mx-4">
          <div className=" rounded-full">
            <BsFillCalendar2MinusFill className="w-[25px] h-[25px]" size={35} />
          </div>
          <h5 className="ml-4">Most Recent</h5>
        </div>
        <div className="text-white font-semibold flex pt-4 items-center mx-4">
          <div className="w-[25px] h-[25px] rounded-full">
            <MdGroups className="w-[25px] h-[25px]" size={35} />
          </div>
          <h5 className="ml-4">Groups</h5>
        </div>
        <div className="text-white font-semibold flex pt-4 items-center mx-4">
          <img
            className="text-white rounded-full w-[25px] h-[25px]"
            src="./Assets/market.png"
            alt=""
          />
          <h5 className="ml-4">Marketplace</h5>
        </div>
        <div className="text-white font-semibold flex pt-4 items-center mx-4">
          <MdSmartDisplay className="w-[25px] h-[25px]" size={35} />
          <h5 className="ml-4">Watch</h5>
        </div>
        <div className="text-white font-semibold flex pt-4 items-center mx-4">
          <ImClock className="text-white w-[25px] h-[25px]" size={35} />

          <h5 className="ml-4">Memories</h5>
        </div>

        <div className="text-white font-semibold flex pt-4 items-center mx-4">
          <div className="w-[25px] h-[25px] bg-[#3a3b3c] rounded-full flex justify-center items-center">
            <MdKeyboardArrowDown size={20} />
          </div>
          <h5 className="ml-4">See more</h5>
        </div>
        <div className="my-6 mx-4 bg-[#3a3b3c] h-[0.1px] mb-2"></div>
        <h5 className="ml-4 mt-4 text-gray-400 text-xl">Your shortcuts</h5>

        <div className="text-white font-semibold flex pt-4 items-center mx-4">
          <div
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg?size=626&ext=jpg&ga=GA1.1.658927123.1679747164&semt=sph')",
            }}
            className="w-[25px] h-[25px] rounded-full bg-cover bg-center"
          ></div>
          <h5 className="ml-4">Easy Child Birth</h5>
        </div>

        <div className="text-white font-semibold flex pt-4 items-center mx-4">
          <div
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg?size=626&ext=jpg&ga=GA1.1.658927123.1679747164&semt=sph')",
            }}
            className="w-[25px] h-[25px] rounded-full bg-cover bg-center"
          ></div>
          <h5 className="ml-4">Pelz Creations</h5>
        </div>

        <div className="text-white font-semibold flex pt-4 items-center mx-4">
          <div
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg?size=626&ext=jpg&ga=GA1.1.658927123.1679747164&semt=sph')",
            }}
            className="w-[25px] h-[25px] rounded-full bg-cover bg-center"
          ></div>
          <h5 className="ml-4">Fit Feet</h5>
        </div>

        <div className="text-white font-semibold flex pt-4 items-center mx-4">
          <div
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg?size=626&ext=jpg&ga=GA1.1.658927123.1679747164&semt=sph')",
            }}
            className="w-[25px] h-[25px] rounded-full bg-cover bg-center"
          ></div>
          <h5 className="ml-4">Oluwapelumi Adetoye</h5>
        </div>

        <div className="pl-4 text-gray-400 pt-6 text-sm bg-[#18191a]">
          Privacy · Terms · Advertising · Ad Choices · Cookies · · Meta © 2023
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
