import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  AiOutlineUserSwitch,
  AiOutlineNotification,
  AiOutlineVideoCameraAdd,
  AiOutlineSearch,
} from "react-icons/ai";
import { Link } from "@mui/material";

const LeftSideBar = () => {
  return (
    <div className="px-6 text-white w-[100%] sm:w-[30%] bg-[#18191a] h-[] hover:overflow-y-scroll pl-10 hidden md:block md:w-[50%] lg:w-[30%]">
      <div className="flex flex-col gap-4">
        <p className="font-semibold text-xl text-white mt-4">Sponsored</p>
        <div className="flex gap-4 items-center">
          <div className="w-[200px] h-[100px] overflow-hidden rounded-lg ">
            <img
              className="w-full h-[100px]"
              src="./Assets/picture.jpg"
              alt=""
            />
          </div>
          <div>
            <h4 className="font-semibold">Apply fast & easy in a few clicks</h4>

            <small>proxify.io</small>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="w-[200px] h-[100px] overflow-hidden rounded-lg ">
            <img
              className="w-full h-[100px]"
              src="./Assets/picture.jpg"
              alt=""
            />
          </div>
          <div>
            <h4 className="font-semibold">Apply fast & easy in a few clicks</h4>

            <small>proxify.io</small>
          </div>
        </div>
  
      </div>

      <div>
        <h4 className="text-xl mt-6 font-semibold">Your Pages and profiles</h4>
        <div className="flex items-center gap-4 mt-2">
          <div className="rounded-[50%] w-10 h-10 overflow-hidden">
            <img className="w-10 h-10" src="./Assets/picture.jpg" alt="" />
          </div>
          <p className="font-semibold text-sm">Gifted hands empowerment foundation</p>
        </div>

        <div className="pl-4">
          <div className="flex gap-2 items-center mt-2">
            <div>
              <IoMdNotificationsOutline size="15" />
            </div>
            <p className="text-sm">2 Notifiations</p>
          </div>

          <div className="flex gap-2 items-center mt-2">
            <div>
              <AiOutlineUserSwitch size="15" />
            </div>
            <p className="text-sm">Switch into Page</p>
          </div>

          <div className="flex gap-2 items-center mt-2">
            <div>
              <AiOutlineNotification size="15" />
            </div>
            <p className="text-sm">Create Promotion</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mt-6 mb-2">
          <h4 className="font-semibold text-xl">Friend Requests</h4 >
          <Link to="#"><p className="text-sm">See All</p></Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex rounded-[50%] w-16 h-16 overflow-hidden">
            <img className="w-16 h-16" src="./Assets/picture.jpg" alt="" />
          </div>

          <div className="flex-1">
            <div className="flex justify-between">
              <h4>Khalifa Dripx</h4>
              <small className="text-slate-500 ">2d</small>
            </div>
            <div className="flex mt-2 justify-between gap-4">
              <button className="bg-[#1877f2] w-full px-4 py-2 rounded-md">
                Confirm
              </button>
              <button className="bg-[#3a3b3c] w-full px-4 rounded-md">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-xl font-semibold">Birthdays</h4>
        <div className="flex gap-2 justify-center items-center mt-2">
          <div className="h-8 w-8">
            <img className="h-8" src="./Assets/picture.jpg" alt="" />
          </div>

          <p className="text-sm font-semibold">Alice Aondsoo and 6 others have their birthdays today</p>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center text-xl font-semibold mt-4">
          <h4>Contacts</h4>

          <div className="flex gap-2">
            <AiOutlineVideoCameraAdd size="20" />
            <AiOutlineSearch size="20" />
            <AiOutlineSearch size="20" />
          </div>
        </div>
        <div>
          <div>
            <div className="flex gap-4 mt-4 items-center">
              <div className="rounded-[50%] overflow-hidden">
                <img className="w-8 h-8" src="./Assets/picture.jpg" alt="p" />
              </div>

              <div>
                <h4 className="font-semibold">New Launch Soecial Deals</h4>
              </div>
            </div>

            <div className="flex gap-4 mt-4 items-center pb-4">
              <div className="rounded-[50%] overflow-hidden">
                <img className="w-8 h-8" src="./Assets/picture.jpg" alt="p" />
              </div>

              <div>
                <h4 className="font-semibold">New Launch Soecial Deals</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
