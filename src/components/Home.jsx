import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div name='home' className="h-screen">
      <div>
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
      </div>
    </div>
  );
};

export default Home;
