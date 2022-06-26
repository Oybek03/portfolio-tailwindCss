import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { heroImg } from "../images/photo_2022-06-26_22-19-23";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div>
          <h2>I'm Full Stack Developer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            aperiam, ipsam tempore aliquam voluptatum doloremque earum
            reiciendis repudiandae optio?
          </p>
          <div>
            <button>
              Portfolio
              <span>
                <MdOutlineKeyboardArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src="././images/photo_2022-06-26_22-19-23" alt="my image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
