import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
    const [nav,setNav]=useState(false)
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
     <div onClick={()=>setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden">
        {nav?<FaTimes size={30}/>:<FaBars size={30}/>}</div>
        {nav&&(  <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
     {links.map(({links,id})=>{
            return <li key={id}  className="px-4 cursor-pointer capitalize py-6 text-4xl">
  {links}
</li>
        })}
       
     </ul>)}
   
    </div>
    
  );
};

export default NavBar;

