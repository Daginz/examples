import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-[#f0f2f5] w-full h-screen md:flex md:items-center md:justify-center md:p-16">
      <div className="justify-center pt-14 md:pt-0 mx-[50px] md:ml-[120px] md:w-[100%]">
        <h3 className="text-[#1877f2] text-5xl md:text-6xl text-center md:text-left font-bold md:w-[500px] mb-4">
          facebook
        </h3>
        <p className="text-2xl md:text-[28px] text-center md:text-left md:w-[500px] md:mb-[100px] hidden md:block">Facebook helps you connect and share with the people in your life.</p>
      </div>

      <div className="md:w-[100%] md:flex md:items-center md:justify-center md:mr-[70px]">
        <div className="bg-white mx-[50px] h-[67%] md:h-[57%] mt-6 rounded-xl flex flex-col gap-4 p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:w-[400px]">
          <h3 className="text-center text-xl mt-2 md:hidden">
            Log in to Facebook
          </h3>
          <input
            className="bg-white px-4 py-[12px] rounded-md mt-2 border"
            type="text"
            placeholder="Email address or phone number"
          />
          <input
            className="bg-white border focus:border-[#1877f2] px-4 py-[12px] rounded-md mt-2"
            type="password"
            placeholder="Password"
          />
          <button className="bg-[#1877f2] px-4 py-[12px] rounded-md text-white font-bold text-xl">
            Log in
          </button>

          <p className="text-center text-[#1877f2] cursor-pointer mb-2 hover:underline">Forgotten password?</p>

          <hr />
          
          <Link to="/register">
          <div className="w-full flex justify-center mt-2">
            <button className=" w-[200px] bg-[#42b72a] py-[12px] rounded-md text-white font-bold text-md hover:bg-[#006606]">
              Create new nccount
            </button>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
