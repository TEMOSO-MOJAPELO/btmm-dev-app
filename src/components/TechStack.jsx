import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaDocker, FaBootstrap, FaWordpress, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiPhp, SiMongodb, SiExpress, SiTailwindcss, SiPostman  } from "react-icons/si";
import { BiLogoTypescript, BiSolidFileJson } from "react-icons/bi";
import { FaWebflow } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";

const TechStack = () => {
    const technologies = [
        
        { 
          logo: <FaHtml5 />, 
          name: 'HTML5' 
        },
        { 
            logo: <FaCss3Alt />, 
            name: 'CSS3' 
        },
        { 
            logo: <IoLogoJavascript />, 
            name: 'JavaScript' 
        },
        { 
          logo: <BiLogoTypescript />, 
          name: 'TypeScript' 
        },
        { 
            logo: <FaReact />, 
            name: 'React.js' 
        },
        { 
            logo: <RiNextjsFill />, 
            name: 'Next.js' 
        },
        { 
            logo: <SiTailwindcss />, 
            name: 'Tailwind CSS' 
        },
        { 
            logo: <FaBootstrap />, 
            name: 'Bootstrap' 
        },
        { 
            logo: <FaWordpress />, 
            name: 'Wordpress' 
        },
        { 
            logo: <FaWebflow />, 
            name: 'Webflow' 
        },
        { 
          logo: <FaNodeJs />, 
          name: 'Node.js' 
        },
        { 
            logo: <SiExpress />, 
            name: 'Express.js' 
        },
        { 
          logo: <FaPython />, 
          name: 'Python' 
        },
        { 
          logo: <FaDocker />, 
          name: 'Docker' 
        },
        { 
          logo: <SiPhp />, 
          name: 'PHP' 
        },
        { 
          logo: <GrMysql />,
          name: 'MySQL'
        },
        { 
            logo: <SiMongodb />, 
            name: 'MongoDB' 
        },
        { 
          logo: <BiSolidFileJson />, 
          name: 'JSON' 
        },
        { 
            logo: <FaFigma />, 
            name: 'Figma' 
        },
        { 
            logo: <SiPostman />, 
            name: 'Postman' 
        }
      ];
    
    return (
        <div name='techstack' className='w-full py-16 px-4 bg-gradient-to-b from-[#B7B7B7] to-[#B7B7B7] dark:bg-gradient-to-b dark:from-[#464646] dark:to-[#434343] opacity-100 '>
            <p className='text-3xl font-bold text-[#D8843B] text-center mx-auto mt-6'>My Tech Stack</p>

            <div className="grid grid-cols-3 md:grid-cols-4 sm:grid-cols-5 gap-4 mt-8 justify-center items-center">
                {technologies.map((tech, index) => (
                    <div 
                        key={index}
                        className="flex items-center justify-center text-5xl text-[#F3F4ED] hover:scale-105 duration-300"
                    >
                        {tech.logo}
                        <p className='text-center text-sm text-[#F3F4ED] font-semibold ml-2'> {tech.name}</p>
                    </div>
                    
                ))}
            </div>
        </div>
    );
        
}

export default TechStack;
