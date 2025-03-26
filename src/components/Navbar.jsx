import React, {useState, useEffect} from 'react'
import LogoW from '../assets/BTMLogo.png'
import LogoB from '../assets/BTMLogo2.png'
import { ThemeToggle } from './ThemeToggle'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-scroll";



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Projects', to: 'projects' },
  ];

  return (
    <nav
      className={`fixed w-full z-70 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#272727]/90 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 ease-in-out duration-300 cursor-pointer">
            <Link
                to="home" 
                smooth={true} 
                duration={500} 
            >
              <img className='dark:hidden' src={LogoB} alt="Logo"  width={80}/>
              
              <img className='hidden dark:block' src={LogoW} alt='LogoWhite' width={80}/>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 dark:text-[#E1D7C2] hover:text-[#D8843B] dark:hover:text-[#D8843B]">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`cursor-pointer transition-colors duration-300 ${
                  scrolled
                    ? 'text-gray-600 dark:text-[#E1D7C2] hover:text-[#D8843B] dark:hover:text-[#D8843B]'
                    : 'text-gray-800 dark:text-[#E1D7C2] hover:text-[#D8843B] dark:hover:text-[#D8843B]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-[#D8843B] text-[#0E0E0E] dark:text-[#E1D7C2] font-medium px-6 py-2 rounded-md hover:bg-[#0E0E0E] dark:hover:bg-gray-100 dark:hover:text-[#D8843B] hover:text-[#D8843B] transition-all duration-300">
              <Link
                 
                 to="contacts"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration={500}
              >
                Let's Talk
              </Link>
            </button>

            <div className="flex items-center">
              <ThemeToggle />
              
            </div>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? 'text-gray-600 dark:text-white' : 'text-gray-800 dark:text-white'
              }`}
            >
              {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </button>

            <div className="items-center pt-1 space-y-1">
              <ThemeToggle />
              
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen bg-white/90 dark:bg-[#272727] backdrop-blur-sm' : 'max-h-0 overflow-hidden'
        }`}
      >
        
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-3 py-2 text-gray-600 dark:text-gray-100 hover:text-gray-900 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}


          <button className="w-full mt-4 bg-[#D8843B] text-[#0E0E0E] dark:text-white px-6 py-2 rounded-md hover:bg-[#0E0E0E] hover:text-[#D8843B] transition-all duration-300">
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar