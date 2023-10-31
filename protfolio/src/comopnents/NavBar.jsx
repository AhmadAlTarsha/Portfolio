import React from "react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const links = [
    { id: 1, links: "home" },

    { id: 2, links: "About" },

    { id: 3, links: "portfolio" },

    { id: 4, links: "experience" },

    { id: 5, links: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature">ahmad al-tarsha</h1>
      </div>
     <ul className="hidden md:flex">
        {links.map(({links,id})=>{
            return <li key={id}  className="px-4 cursor-pointer capitalize font-medium text-gray-600 hover:scale-105 duration-200">
  {links}
</li>
        })}
     </ul>
     <div><FaBars/></div>
    </div>
  );
};

export default NavBar;

