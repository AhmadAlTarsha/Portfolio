import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "Home" },

    { id: 2, link: "About" },

    { id: 3, link: "My Projects" },

    { id: 4, link: "My Technologies" },

   
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="mobile:text-2xl md:text-10xl lg:text-7xl font-signature">ahmad wael</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ link, id }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-600 hover:scale-105 duration-200"
            >
              <Link to={link} duration={500} smooth>{link}</Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ link, id }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl mobile:text-xl"
              >
                <Link onClick={()=>setNav(!nav)} to={link} duration={500} smooth>
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
