
import React from "react";
import css from "../assets/css.png";
import express from "../assets/express.png";
import firebase from "../assets/firebase.png";
import html from "../assets/HTML.png";
import js from "../assets/js.png";
import mongoDB from "../assets/mongoDB.png";
import nodejs from "../assets/nodejs.png";
import postgres from "../assets/POSTGRESS.png";
import r from "../assets/r.png";
import red from "../assets/red.png";
import tail from "../assets/tail.jpg";

const Technologies = () => {
  const arr = [
    { id: 1, src: css, title: "Css", style: "shadow-blue-500 mobile:text-xs" },
    { id: 2, src: html, title: "HTML", style: "shadow-orange-500 mobile:text-xs"  },
    { id: 3, src: express, title: "ExpressJS", style: "shadow-gray-500 mobile:text-xs" },
    { id: 4, src: firebase, title: "Firebase", style: "shadow-orange-300 mobile:text-xs" },
    { id: 5, src: js, title: "JavaScript", style: "shadow-yellow-500 mobile:text-xs" },
    { id: 6, src: mongoDB, title: "mongoDB", style: "shadow-green-500 mobile:text-xs" },
    { id: 7, src: nodejs, title: "NodeJs", style: "shadow-green-200 mobile:text-xs" },
    { id: 8, src: r, title: "ReactJS", style: "shadow-blue-600 mobile:text-xs" },
    { id: 9, src: red, title: "Redux", style: "shadow-blue-500 mobile:text-xs" },
    { id: 10, src: tail, title: "Tailwind", style: "shadow-sky-500 mobile:text-xs" },
    { id: 11, src: postgres, title: "Postgres", style: "shadow-blue-600 mobile:text-xs" },
  ];

  return (
    <div
      name="My Technologies"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="lg:text-5xl font-bold border-gray p-2 mobile:text-xl pl-16 ">
             Technologies I have worked with 
          </p>
        </div>

        <div className="w-full grid grid-cols-1 mobile:grid-cols-3 gap-4 text-center py-6 px-4 mobile:py-1 mobile:px-0 mobile:justify-center mobile:pl-16">
          {arr.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img  src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
