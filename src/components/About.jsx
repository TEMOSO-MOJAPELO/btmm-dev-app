import React from 'react';
import Me from '../assets/Me3.png';
import { Link } from 'react-scroll';
const About = () => {
  return (
    <div name='about' className='w-full py-16 px-4 bg-gradient-to-b from-[#FFFFFF] to-[#B7B7B7] dark:bg-gradient-to-b dark:from-[#0E0E0E] dark:to-[#464646] opacity-100 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[400px] mx-auto my-4' src={Me} alt="Me" />
            <div className='flex  flex-col justify-center'>
                <h1 className='font-bold text-[#D8843B] md:text-4xl sm:text-3xl text-2xl py-2'>About Me</h1>
                <p className='font-semibold text-[#646464] dark:text-white py-4'>I am a passionate full stack developer and UI/UX Designer with a strong foundation in MERN Stack and Figma. With one year of professional experience, I'm a quick learner and team player dedicated to solving complex problems and creating efficient web solutions. My goals include expanding skills in mobile app development, software engineering, freelancing, and other emerging opportunities. Committed to delivering high-quality code and embracing technological challenges.</p>
                <button className='bg-[#D8843B] text-white font-semibold w-[180px] rounded-md my-6 mx-auto md:mx-0 py-3 shadow-xl hover:shadow-lg hover:bg-black hover:text-[#D8843B]  ease-in-out duration-500 rounded-md'>
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                      See My Work
                  
                  </Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default About