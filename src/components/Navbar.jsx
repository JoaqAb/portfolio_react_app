import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handClick = () => setNav(!nav);

  return (
    
    <div className="fixed w-full h-[80px] flex justify-between items-center bg-[#000020] text-[#efefef]">
      <div className="p-4">
        <img src={Logo} alt="Logo" style={{ width: 100 }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex p-4">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburguer */}
      <div onClick={handClick} className="md:hidden z-10 p-6">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-20 w-full bg-white/10 backdrop-blur-2xl rounded flex flex-col justify-center items-center"
        }
      >
        <li className="py-2 w-full text-center hover:bg-white/20 backdrop-blur-2xl">
          <Link onClick={handClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-2 w-full text-center hover:bg-white/20 backdrop-blur-2xl">
          <Link onClick={handClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-2 w-full text-center hover:bg-white/20 backdrop-blur-2xl">
          <Link onClick={handClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-2 w-full text-center hover:bg-white/20 backdrop-blur-2xl">
          <Link onClick={handClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-2 w-full text-center hover:bg-white/20 backdrop-blur-2xl">
          <Link onClick={handClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
        
      {/* Social icons */}
      <div className="fixed w-full bottom-2 lg:bottom-8 overflow-hidden z-50">
        <div className="container mx-auto">
          <div className="w-full bg-white/20 h-[56px] backdrop-blur-2xl rounded-full max-w-[260px]
          mx-auto px-3 flex justify-between items-center text-2xl text-[#01c4e7]">
            <a href="https://www.linkedin.com/in/joaquin-abuin-31940092/">
              <Link className="cursor-pointer w-[60px] h-[56px] flex items-center justify-center">
                <FaLinkedin size={30} />
              </Link>
            </a>
            <a href="https://github.com/JoaqAb">
              <Link className="cursor-pointer w-[60px] h-[56px] flex items-center justify-center">
                <FaGithub size={30} />
              </Link>
            </a>
            <a href="">
              <Link className="cursor-pointer w-[60px] h-[56px] flex items-center justify-center">
                <HiOutlineMail size={30} />
              </Link>
            </a>
            <a href="">
              <Link className="cursor-pointer w-[60px] h-[56px] flex items-center justify-center">
                <BsFillPersonLinesFill size={30} />
              </Link>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
