import React from 'react'
import jordanGym from "../assets/jordanGym.png"
import tintin from "../assets/tintin.png"
import QusetionGame from "../assets/QusetionGame.png"

const Projects = () => {
  return (
    <div name="My Projects" className='bg-gradient-to-b from-gray-700 to-black w-full text-white md:h-screen   flex justify-center' >
      <div className='max-w-screen-lg p-4 mx auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8 mobile:pb-1 flex flex-col  mobile:pl-0  w-full   '>
          <p className='lg:text-7xl lg:pb-10 font-bold mobile:text-xl mobile:pb-1 pl-16  '>MyProjects</p>
          
        </div>
        <div className='grid mobile:grid-cols-2 md:grid-cols-3 gap-8 px-12 mobile:px-0 mobile:pl-16 w-full lg:items-center justify-center pl-40'>
          <div>
            <img src={jordanGym} alt="" />
            <div className='flex justify-center'>
              <p >Jordan Gym </p>
              
            </div>
          </div>
          <div>
            <img src={tintin} alt="" />
            <div className='flex justify-center'>
              <p >Tin Tin  </p>
              
            </div>
          </div>
          <div>
            <img src={QusetionGame} alt="" />
            <div className='flex justify-center'>
              <p >QuestionGame </p>
              
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Projects