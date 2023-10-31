import React from "react";
import me from "../assets/me.jpeg";
import  {AiOutlineArrowRight}  from "react-icons/ai";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-t from-black to-gray-600 ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold">im Full stack Developer</h2>
          <p className='text-gray-500 py-4 wax-w-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur
            quae eius? Harum, velit? A beatae odio ab vitae doloribus unde,
            maiores aliquam, sit pariatur architecto vero? Earum, magnam
            dolores?
          </p >
          <div><button className="group text-white w-fit px-6 py-4 my-3 flex items-center rounded-md bg-blue-700" >
            portfolio <span className="group-hover:rotate-90 duration-500"><AiOutlineArrowRight/></span>
            </button>
            </div>
        </div>
        <div>
            <img className="rounded-2xl mx-auto w-2/3 md:w-full" src={me} alt="my profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
