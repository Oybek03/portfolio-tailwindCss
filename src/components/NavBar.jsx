import React from "react";

const NavBar = () => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experence",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between bg-black items-center w-full h-20 px-4 text-white fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2 ">Jox</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 "
          >
            {link.link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
