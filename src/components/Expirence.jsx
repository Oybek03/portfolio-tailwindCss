import React from "react";

const Expirence = () => {
  const techs = [
    {
      id: 1,
      src: "https://icon-library.com/images/icon-html/icon-html-12.jpg",
      name: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "https://icon-library.com/images/css-icon-png/css-icon-png-0.jpg",
      name: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: "https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg",
      name: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: "https://icon-library.com/images/react_1353128.png",
      name: "ReactJs",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: "https://icon-library.com/images/github-icon-vector/github-icon-vector-15.jpg",
      name: "GIT",
      style: "shadow-orange-400",
    },
    {
      id: 6,
      src: "https://icon-library.com/images/github-icon-png/github-icon-png-29.jpg",
      name: "GitHub",
      style: "shadow-gray-700",
    },
    {
      id: 7,
      src: "data:image/png;base64,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",
      name: "TailWind Css",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: "https://icon-library.com/images/nodejs-icon/nodejs-icon-10.jpg",
      name: "npm",
      style: "shadow-orange-500",
    },
    {
      id: 9,
      src: "https://icon-library.com/images/xd-icon/xd-icon-19.jpg",
      name: "Adobe XD",
      style: "shadow-gray-500",
    },
  ];
  return (
    <div
      name="expirence"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mt-30">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experence
          </p>
          <p className="py-6 ">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map((tech) => (
            <div
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg w-full  ${tech.style}`}
            >
              <img src={tech.src} alt="exp tech" className="w-20 mx-auto" />
              <p className="mt-4">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expirence;
