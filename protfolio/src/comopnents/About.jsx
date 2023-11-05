import React from "react";

const About = () => {
  return (
    <div 
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-700 to-black text-white mobile:pl-13"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 mobile:pb-2 ">
          <p className="lg:text-7xl mobile:text-xl mobile:pl-16 font-bold border-gray-400 " >About Me</p>
        </div>
        <p className="lg:text-xl mt-20 mobile:text-xs pl-16 mobile:mt-5 ">
        I studied civil engineering and worked there for 5 Years,But I Decided to change my career path for several reasons.
        </p>
        <br />
        <p className="lg:text-xl mobile:text-xs pl-16">
        This shift can be both challenging and rewarding, as it requires a shift in mindset and skillset. However, the skills gained as a civil engineer, such as problem-solving, critical thinking, and attention to detail, can be valuable assets in the world of coding. With a commitment to learning and adapting to the ever-evolving technology landscape, one can harness their engineering background to excel in coding and contribute to the innovation and advancement of our digital society. The transition to a coding career opens doors to a diverse range of opportunities, from web development and mobile app design to data analysis and artificial intelligence, making it an exciting and fulfilling choice for those seeking a fresh start in the tech industry.
        </p>
      </div>
      <p></p>
    </div>
  );
};

export default About;
