import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
  return (
    <div className="flex flex-col top top-[35%] left-0 fixed">
      <ul className="flex flex-col ">
        <li className=" flex justify-between items-center w-40 h-14 px-4 ml-[-100px]  bg-gray hover:ml-[-10px] rounded-md duration-300">
          <a
            className="flex justify-between items-center w-full text-white"
            href="https://www.linkedin.com/in/ahmadaltarsha/"
          >
            <>
              Linkedin
              <FaLinkedin size={32} />
            </>
          </a>
        </li>
        <li className=" flex justify-between items-center w-40 h-14 px-4 ml-[-100px]  bg-gray hover:ml-[-10px] rounded-md duration-300">
          <a
            className="flex justify-between items-center w-full text-white"
            href="https://github.com/AhmadAlTarsha"
          >
            <>
              GitHub
              <FaGithub size={32} />
            </>
          </a>
        </li>
        <li className=" flex justify-between items-center w-40 h-14 px-4 ml-[-100px]  bg-gray hover:ml-[-10px] rounded-md duration-300">
          <a
            className="flex justify-between items-center w-full text-white mobile:text-xs"
            href="mailto:ahmadwael.altarsha@gmail.com"
          >
            <>
              Gmail
              <HiOutlineMail size={32} />
            </>
          </a>
        </li>
        <li className=" flex justify-between items-center w-40 h-14 px-4 ml-[-100px]  bg-gray hover:ml-[-10px] rounded-md duration-300">
          <a
            className="flex justify-between items-center w-full text-white "
            href="/resume.pdf" download={true} target="blank " rel="noreferrer"
          >
            <>
              Resume
              <BsFillPersonLinesFill size={32} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
