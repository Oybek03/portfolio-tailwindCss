import React from "react";

const Expirence = () => {
  const techs = [
    {
      id: 1,
      src: "https://icon-library.com/images/css-icon-png/css-icon-png-0.jpg",
    },
    {
      id: 2,
      src: "https://icon-library.com/images/icon-html/icon-html-12.jpg",
    },
    {
      id: 1,
      src: "https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg",
    },
    {
      id: 1,
      src: "https://icon-library.com/images/react_1353128.png",
    },
    {
      id: 1,
      src: "https://icon-library.com/images/github-icon-vector/github-icon-vector-15.jpg",
    },
    {
      id: 1,
      src: "https://icon-library.com/images/github-icon-png/github-icon-png-29.jpg",
    },
  ];
  return (
    <div
      name="expirence"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experence
          </p>
          <p className="py-6 ">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
            <img
              src="https://e7.pngegg.com/pngimages/185/866/png-clipart-html-logo-html-web-design-scalable-graphics-world-wide-web-markup-language-html5-icon-hd-miscellaneous-angle-thumbnail.png"
              alt="dww"
            />
            <p className="mt-4">HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expirence;
