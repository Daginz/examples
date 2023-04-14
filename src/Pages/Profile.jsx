import React from "react";
import AddPost from "../components/AddPost";
import TopBar from "../components/TopBar";

const Profile = () => {
  return (
    <div>
      <TopBar />
      <div className="bg-[#18191a] pt-[70px]">
        <div className="bg-[#242526] pb-4">
          <div
            style={{
              backgroundImage:
                "url('https://t3.ftcdn.net/jpg/01/52/61/36/240_F_152613619_kaNluqI3oUjvIhEQDcDfuksXknNJ45lf.jpg')",
            }}
            className="relative bg-cover bg-center w-full h-[220px] lg:w-[70%] lg:[180px] lg:mx-auto lg:h-[350px] rounded-r-md rounded-l-md"
          ></div>

          <div className="absolute w-[200px] h-[200px] lg:w-[190px] lg:h-[190px] rounded-full bg-[#242526] left-[50%] lg:left-[25%] translate-x-[-50%] translate-y-[-50%] lg:translate-x-[-50%] lg:translate-y-[-22%]"></div>

          <div
            style={{
              backgroundImage: "url('./Assets/pelzz.jpg')",
            }}
            className="bg-cover bg-center absolute bg-white w-[190px] h-[190px] lg:w-[180px] lg:h-[180px] rounded-full left-[50%] lg:left-[25%] translate-x-[-50%] translate-y-[-50%] lg:translate-x-[-50%] lg:translate-y-[-20%]"
          ></div>

          <h2 className="font-bold text-3xl text-white mt-[100px] flex  justify-center lg:mt-[20px] lg:ml-[-150px]">
            Oluwapelumi Adetoye
          </h2>
          <p className="text-[#acb3b8] text-white flex flex-col items-center lg:ml-[-380px]">
            4.9K friends
          </p>

          {/* <div className="flex "> */}
          <div className="w-[50%] flex mt-8 md:mt-8 relative translate-x-[80%] lg:translate-x-[69%]">
            <div className="absolute w-[45px] h-[45px] rounded-full translate-x-[-50%] translate-y-[-50%] lg:ml-[-37px] left-[5%]"></div>

            <div
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/free-photo/businesswoman-executive-professional-success-concept_53876-137644.jpg?size=626&ext=jpg&ga=GA1.1.658927123.1679747164&semt=sph')",
              }}
              className="bg-cover bg-center absolute w-[42px] h-[42px] lg:ml-[-37px] left-[5%] rounded-full translate-x-[-50%] translate-y-[-50%]"
            ></div>

            <div className="absolute w-[45px] h-[45px] rounded-full bg-[#242526] left-[13%] translate-x-[-50%] translate-y-[-50%] lg:ml-[-68px]"></div>

            <div
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/free-photo/young-african-american-woman-isolated-yellow-studio-background-facial-expression-beautiful-female-half-length-portrait-concept-human-emotions-facial-expression-standing-crossing-hands_155003-25191.jpg?size=626&ext=jpg&ga=GA1.2.658927123.1679747164&semt=sph')",
              }}
              className="bg-cover bg-center absolute w-[42px] h-[42px] rounded-full left-[13%] translate-x-[-50%] translate-y-[-50%] lg:ml-[-68px]"
            ></div>

            <div className="absolute w-[45px] h-[45px] rounded-full bg-[#242526] left-[23%] translate-x-[-50%] translate-y-[-50%] lg:ml-[-100px]"></div>

            <div
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/free-photo/african-american-business-woman-by-window_1303-10869.jpg?size=626&ext=jpg&ga=GA1.2.658927123.1679747164&semt=sph')",
              }}
              className="bg-cover bg-center absolute w-[42px] h-[42px] rounded-full left-[23%] translate-x-[-50%] translate-y-[-50%] lg:ml-[-100px]"
            ></div>

            <div className="absolute w-[45px] h-[45px] rounded-full bg-[#242526] left-[30%] translate-x-[-50%] translate-y-[-50%] lg:ml-[-132px]"></div>

            <div
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg&ga=GA1.2.658927123.1679747164&semt=sph')",
              }}
              className="bg-cover bg-center absolute w-[42px] h-[42px] rounded-full left-[30%] translate-x-[-50%] translate-y-[-50%] lg:ml-[-132px]"
            ></div>

            <div className="absolute w-[45px] h-[45px] rounded-full bg-[#242526] left-[38%] translate-x-[-50%] translate-y-[-50%] lg:ml-[-164px]"></div>

            <div
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?size=626&ext=jpg&ga=GA1.2.658927123.1679747164&semt=sph')",
              }}
              className="bg-cover bg-center absolute w-[42px] h-[42px] rounded-full left-[38%] translate-x-[-50%] translate-y-[-50%] lg:ml-[-164px]"
            ></div>
          </div>
          <div className="lg:text-white hidden lg:block lg:flex lg:justify-center lg:mt-[-15px] lg:ml-[645px] w-[50%]">
            <button className="bg-[#2374e1] px-6 py-[6px] rounded-md font-semibold mr-2">
              Add to story
            </button>
            <button className="bg-[#3a3b3c] px-6 py-[6px] rounded-md font-semibold">
              Edit profile
            </button>
          </div>

          {/* mobile screen */}
          <div className="text-white mt-10 flex md:hidden justify-center gap-2">
            <button className="bg-[#2374e1] px-10 py-[6px] rounded-md font-semibold">
              Add to story
            </button>
            <button className="bg-[#3a3b3c] px-10 py-[6px] rounded-md font-semibold">
              Edit profile
            </button>
          </div>

          {/* </div> */}

          <div className="mt-4 mx-4 bg-[#3a3b3c] h-[0.1px] md:mt-10 md:mx-[225px] mb-2"></div>
          {/* mobile */}
          <div className="text-white flex gap-10 block md:hidden flex justify-center mt-4">
            <span>Posts</span>
            <span>About</span>
            <span>Friends</span>
            <span>Photos</span>
            <span>More</span>
            <span className="bg-[#3a3b3c] px-4 py-[15px] rounded "></span>
          </div>

          {/* big screen */}
          <div className="md:flex md:justify-center md:items-center hidden md:block">
            <div className="flex justify-between items-center w-[900px]">
              <div className="text-white flex gap-7 flex justify-center mt-4 ml-6">
                <span>Posts</span>
                <span>About</span>
                <span>Friends</span>
                <span>Photos</span>
                <span>Videos</span>
                <span>Check-ins</span>
                <span>More</span>
              </div>
              <div>
                <span className="bg-[#3a3b3c] px-[20px] py-[8px] rounded"></span>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[#18191a] flex text-white p-4 pl-[20px] md:w-[70%] mx-auto justify-between">
          <div className="w-full md:w-[40%] bg-[#242526] p-4 rounded-md">
            <h4 className="font-bold text-xl">Intro</h4>

            <p className="text-center text-sm">
              Hi, I am a Front-End Web Developer
            </p>

            <button className="bg-[#3a3b3c] px-10 py-[6px] rounded-md font-semibold w-full mt-4">
              Edit bio
            </button>

            <div className="mt-4 leading-10">
              <p>Studied at Obafemi Awolowo University</p>
              <p>Lives in Ile Ife</p>
              <p>From Ile Ife</p>
              <p>Followed by 1,418 people</p>
              <p className="text-blue-700">pelumiiadetoye@gmail.com</p>
            </div>

            <button className="bg-[#3a3b3c] px-10 py-[6px] rounded-md font-semibold w-full">
              Edit details
            </button>
          </div>

          {/* Add Post */}
          <div className="w-[58%] hidden md:block">
            <AddPost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
