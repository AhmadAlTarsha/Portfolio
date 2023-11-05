import React from "react";
import me from "../assets/me.jpeg";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-t from-black to-gray-600 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row mobile:pl-5" >
        <div className="flex flex-col justify-center h-full">
          <h2 className="lg:text-6xl  mobile:text-2xl font-bold text-white  ">
            {" "}
            Full Stack Developer
          </h2>
          <p className="text-white ray-500 lg:py-4   wax-w-md lg:text-xl lg:pl-0 mobile:py-3 mobile:pl-16  "  >
            A web developer who is passionate about programming and aspires to
            learn what is new and keep up to data with developments in this field
          </p>
        </div>
        <div>
          <img
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            src={me}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
