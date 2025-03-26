import React from 'react'
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-scroll";

const Hero = () => {

  return (
    <div name='home' className = "dark:bg-[#0E0E0E] dark:bg-[url('../assets/Home(Dark Mode).png')] text-[#0E0E0E] bg-cover">
        <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#D8843B] md:text-xl text-md font-bold p-4'>Hello! My name is</p>
            <h1 className='dark:text-white md:text-6xl sm:text-5xl text-3xl font-bold md:py-6'>Temoso Mojapelo</h1>
            <div className='flex justify-center'>
              <p className='text-[#434343] dark:text-white md:text-3xl sm:text-2xl text-xl font-bold'>I am a </p>
              <ReactTyped 
                className='text-[#EEA15D] md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2'
                strings={[
                  "Full Stack Web Developer",
                  "UI/UX Designer",
                  "Junior Web Developer",
                  "Multimedia Developer",
                ]} 
                
                typeSpeed={60}
                backSpeed={40}
                loop
              />
           </div>
            <p className='md:text-2xl text-xl font-bold text-[#646464] pt-4 px-3'>I develop scalable and unique designs that satisfy the demands of modern websites and web applications.</p>
            <div className='md:flex grid mx-auto my-5'> 
              <button className='bg-[#D8843B] dark:text-white font-bold w-[200px] rounded-md md:my-6 py-3 md:mx-4 shadow-xl hover:shadow-lg hover:bg-black hover:text-[#D8843B] dark:hover:text-[#D8843B] ease-in-out duration-500 rounded-md'><Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Find out more</Link></button> 
              <button className='bg-transparent text-[15px] text-[#D8843B] border-2 font-bold border-[#F07911] hover:border-[#D8843B] w-[200px] my-6 py-3 shadow-xl hover:shadow-lg hover:bg-[#D8843B] hover:text-white dark:hover:bg-gray-100 dark:hover:text-[#D8843B] dark:hover:border-gray-100 ease-in-out duration-500 rounded-md'><a href="https://mega.nz/folder/THYxkaoA#fMOa9PYf8zDh4wMsICKdRA">Download Resume</a></button>
            </div> 
            <ul className='hidden md:flex justify-center mx=-auto pt-[-5] pl-2'>
              <li className='p-3 text-[#646464] hover:text-[#D8843B] ease-in-out duration-300'><a href="https://www.linkedin.com/in/temoso-mojapelo-807893240/">
                <FaLinkedin size={30} />
              </a></li>
              <li className='p-3 text-[#646464] hover:text-[#D8843B] ease-in-out duration-300'><a href="https://github.com/TEMOSO-MOJAPELO">
                <FaGithub size={30}  />
              </a></li>
              <li className='p-3 text-[#646464] hover:text-[#D8843B] ease-in-out duration-300'><a href="https://www.instagram.com/temoso.jpg/?utm_source=ig_web_button_share_sheet">
                <FaInstagram size={30}  />
              </a></li>
              <li className='p-3 text-[#646464] hover:text-[#D8843B] ease-in-out duration-300'><a href="https://x.com/blvck_3lf">
                <BsTwitterX size={30} />
              </a></li>
            </ul>   
        </div>        
    </div>
  )
}

export default Hero