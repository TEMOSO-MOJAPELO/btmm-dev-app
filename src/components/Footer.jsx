import React from 'react'
import { FiGithub } from "react-icons/fi";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { MdMailOutline, MdLocalPhone } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { TiArrowRight } from "react-icons/ti";
import BTMLogo from "../assets/BTMLogo.png";
import { Link } from "react-scroll";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    

  return (
    <div className='bg-[#151515] text-[#707070]'>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={BTMLogo} alt="/" width={75} />
            <p className="text-sm leading-relaxed">
                A passionate Full Stack Web Developer with one year of multimedia development experience, specializing in MERN Stack. Skilled in problem-solving, adaptable to new learning, and committed to meeting deadlines, with a goal to excel in mobile app and software development.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/TEMOSO-MOJAPELO" className="hover:text-white transition-colors" target='blank'>
                <FiGithub size={20} />
              </a>
              <a href="https://x.com/blvck_3lf" className="hover:text-white transition-colors" target='blank'>
                <FaXTwitter size={20} />
              </a>
              <a href="https://www.instagram.com/temoso.jpg/?utm_source=ig_web_button_share_sheet" className="hover:text-white transition-colors" target='blank'>
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/temoso-mojapelo-807893240/" className="hover:text-white transition-colors" target='blank'>
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:px-6 md:px-0 lg:px-8
           px-0">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 cursor-pointer">
             
                <li className="text-sm hover:text-white transition-colors flex items-center space-x-1 group">
                  
                    <Link
                      to="home" 
                      smooth={true} 
                      duration={500} 
                    >
                      Home
                    </Link>
                    <TiArrowRight size={14} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                  
                </li>
                <li className="text-sm hover:text-white transition-colors flex items-center space-x-1 group">
                  
                    <Link
                      to="about" 
                      smooth={true} 
                      duration={500} 
                    >
                      About
                    </Link>
                    <TiArrowRight size={14} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                  
                </li>
                <li className="text-sm hover:text-white transition-colors flex items-center space-x-1 group">
                  
                    <Link
                      to="services" 
                      smooth={true} 
                      duration={500} 
                    >
                      Services
                    </Link>
                    <TiArrowRight size={14} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                  
                </li>
                <li className="text-sm hover:text-white transition-colors flex items-center space-x-1 group">
                  
                    <Link
                      to="projects" 
                      smooth={true} 
                      duration={500} 
                    >
                      Projects
                    </Link>
                    <TiArrowRight size={14} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                  
                </li>
                <li className="text-sm hover:text-white transition-colors flex items-center space-x-1 group">
                  
                    <Link
                      to="contacts" 
                      smooth={true} 
                      duration={500} 
                    >
                      Contact
                    </Link>
                    <TiArrowRight size={14} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                  
                </li>
              
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:0748536831" className="flex items-center space-x-3 hover:text-white transition-colors">
                <MdLocalPhone size={18} />
                <span className="text-sm">+27 74 853-6831</span>
              </a>
              <a href="mailto:btemoso7@gmail.com" className="flex items-center space-x-3 hover:text-white transition-colors">
                <MdMailOutline size={18} />
                <span className="text-sm">btemoso7@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3">
                <LuMapPin size={18} />
                <span className="text-sm">Soshanguve<br />Pretoria, Gauteng</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-center">
            <div className="text-sm text-gray-400">
              © {currentYear} Created by Temoso Mojapelo.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer