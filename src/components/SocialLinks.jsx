import React from "react";
import { FaGitHub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "#",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGitHub size={30} />
        </>
      ),
      href: "#",
    },
    {
      id: 3,
      child: (  
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "#",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "#",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link) => (
          <li
            className={
              "flex justify-center items-center w-40 h-14 px-4 ml-[-85px] hover:ml-[-1px] hover:rounded-md duration-300 bg-gray-500 + ' ' + style"
            }
          >
            <a
              href={link.href}
              className="flex justify-between items-center w-full text-white hover:text-white"
              download={link.download}
              target="_blank"
            >
              <>{link.child}</>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
