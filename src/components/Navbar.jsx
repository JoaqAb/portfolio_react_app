import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handClick = () => setNav(!nav);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed w-screen h-[80px] z-50 flex justify-between items-center bg-[#000020] text-[#efefef]">
      <div className="p-8 pt-10">
        <img src={Logo} alt="Logo" style={{ width: 100 }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex p-8">
        <Link to="home" smooth={true} duration={500}>
          <li className="hover:text-[#01c4e7] hover:scale-110">Home</li>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <li className="hover:text-[#01c4e7] hover:scale-110">About</li>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <li className="hover:text-[#01c4e7] hover:scale-110">Skills</li>
        </Link>
        <Link to="work" smooth={true} duration={500}>
          <li className="hover:text-[#01c4e7] hover:scale-110">Work</li>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <li className="hover:text-[#01c4e7] hover:scale-110">Contact</li>
        </Link>
      </ul>

      {/* Hamburguer */}
      <div onClick={handClick} className="md:hidden z-10 p-6 mr-4">
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
        <Link
          className="w-full"
          onClick={handClick}
          to="home"
          smooth={true}
          duration={500}
        >
          <li className="py-2 w-full text-center hover:bg-white/20 backdrop-blur-2xl">
            Home
          </li>
        </Link>
        <Link
          className="w-full"
          onClick={handClick}
          to="about"
          smooth={true}
          duration={500}
        >
          <li className="py-2 w-full text-center hover:bg-white/20 backdrop-blur-2xl">
            About
          </li>
        </Link>
        <Link
          className="w-full"
          onClick={handClick}
          to="skills"
          smooth={true}
          duration={500}
        >
          <li className="py-2 w-full text-center hover:bg-white/20 backdrop-blur-2xl">
            Skills
          </li>
        </Link>
        <Link
          className="w-full"
          onClick={handClick}
          to="work"
          smooth={true}
          duration={500}
        >
          <li className="py-2 w-full text-center hover:bg-white/20 backdrop-blur-2xl">
            Work
          </li>
        </Link>
        <Link
          className="w-full"
          onClick={handClick}
          to="contact"
          smooth={true}
          duration={500}
        >
          <li className="py-2 w-full text-center hover:bg-white/20 backdrop-blur-2xl">
            Contact
          </li>
        </Link>
      </ul>

      {/* Social icons */}
      <div className="fixed w-full bottom-2 lg:bottom-4 overflow-hidden z-50">
        <div className="container mx-auto">
          <div
            className="w-full bg-white/20 h-[56px] backdrop-blur-2xl rounded-full max-w-[260px]
          mx-auto px-8 flex justify-between items-center text-2xl text-[#efefef]"
          >
            <a
              className="hover:text-[#01c4e7]"
              href="https://www.linkedin.com/in/joaquin-abuin-31940092/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              className="hover:text-[#01c4e7]"
              href="https://github.com/JoaqAb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              className="hover:text-[#01c4e7]"
              href="mailto:joaquinabuin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineMail size={30} />
            </a>
            <a
              className="hover:text-[#01c4e7]"
              href="https://drive.google.com/file/d/1rVmRjJ9VKCySXb9ALWQroQ0Q6EVtpHpr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFillPersonLinesFill size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
