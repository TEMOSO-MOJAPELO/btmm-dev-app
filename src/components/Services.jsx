import React from 'react';
import frontEndImg from '../assets/icons8-website-development-100-white.png';
import backEndImg from '../assets/icons8-website-development-67-white.png';
import UiImage from '../assets/icons8-drawing-100-white.png';
import darkFImage from '../assets/icons8-website-development-100.png';
import darkBImage from '../assets/icons8-website-development-67.png';
import darkUIImage from '../assets/icons8-drawing-100.png';

const Services = () => {
  return (
    <div name='services' className='w-full py-[10rem] px-4 bg-gradient-to-b from-[#B7B7B7] to-[#B7B7B7] dark:bg-gradient-to-b dark:from-[#434343] dark:to-[#272727]'>
      <div className='max-w-[1240px] mx-auto'>
        <h1 className=' md:py-8 my-8  md:text-4xl text-3xl font-bold text-[#D8843B]'>My Services</h1>
          <div className='mx-auto grid md:grid-cols-3 gap-8'>
              <div className='w-full bg-[#D8843B] dark:bg-[#242424] px-6 shadow-2xl shadow-[#4F4F4F] hover:scale-105 duration-300'>
                <img className='dark:hidden md:w-16 w-20 mt-[6rem]' src={frontEndImg} alt="/" />
                <img className='hidden dark:block md:w-16 w-20 mt-[6rem]' src={darkFImage} alt="/" />
                <h1 className='text-xl font-bold text-white pt-6 px-2'>Frontend Development</h1>
                <p className='text-[#EBEBEB] dark:text-[#707070] font-medium mt-6 mb-[120px] px-2'>I use modern web technologies like React, HTML, CSS, and TailwindCSS to create interact and responsive web applications.</p>
              </div>
              <div className='w-full bg-[#D8843B] dark:bg-[#242424] px-6 shadow-2xl shadow-[#4F4F4F] hover:scale-105 duration-300'>
                <img className='dark:hidden md:w-16 w-20 mt-[6rem]' src={backEndImg} alt="/" />
                <img className='hidden dark:block md:w-16 w-20 mt-[6rem]' src={darkBImage} alt="/" />
                <h1 className='text-xl font-bold text-white pt-6 px-2'>Backend Developer</h1>
                <p className='text-[#EBEBEB] dark:text-[#707070] font-medium mt-6 mb-[120px] px-2'>Responsible for designing and building server-side applications using Node.js, Python and Express.js. I have a thorough understanding of APIs and database management technologies such as MySQL and  NoSQL(MongoDB).</p>
              </div>
              <div className='w-full bg-[#D8843B] dark:bg-[#242424] px-6 shadow-2xl shadow-[#4F4F4F] hover:scale-105 duration-300'>
                <img className='dark:hidden md:w-16 w-20 mt-[6rem]' src={UiImage} alt="/" />
                <img className='hidden dark:block md:w-16 w-20 mt-[6rem]' src={darkUIImage} alt="/" />
                <h1 className='text-xl font-bold text-white pt-6 px-2'>UI/UX Designer</h1>
                <p className='text-[#EBEBEB] dark:text-[#707070] font-medium mt-6 mb-[120px] px-2'>I am proficient with Figma and utilize it to produce sophisticated UI designs, interactive prototypes, and wireframes.</p>
              </div>
          </div>
      </div>
        
        
    </div>
  )
}

export default Services