import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  const [showFirstSection, setShowFirstSection] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);
  const [animationsLoaded, setAnimationsLoaded] = useState(false);

  const handleSecondTypingDone = () => {
    setShowThirdSection(true);
  };

  useEffect(() => {
    const firstSectionTimeout = setTimeout(() => {
      setShowFirstSection(true);
    }, 1000);

    const secondSectionTimeout = setTimeout(() => {
      setShowSecondSection(true);
    }, 2200);

    const thirdSectionTimeout = setTimeout(() => {
      setShowThirdSection(true);
    }, 4000);

    const animationsLoadedTimeout = setTimeout(() => {
      setAnimationsLoaded(true);
    }, 7000);

    return () => {
      clearTimeout(firstSectionTimeout);
      clearTimeout(secondSectionTimeout);
      clearTimeout(thirdSectionTimeout);
      clearTimeout(animationsLoadedTimeout);
    };
  }, []);

  return (
    <div
      name="home"
      className="md:w-full min-h-screen bg-[#000020] text-[#efefef] flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="w-full max-w-[1000px] flex flex-col lg:flex-row h-screen justify-center items-center p-4">
        <div className="max-w-[600px] mx-auto px-8 flex flex-col justify-center w-full md:w-4/5 h-full">
          {showFirstSection && (
            <TypeAnimation
              className="text-[#efefef]"
              sequence={["Hi, my name is"]}
              cursor={false}
            />
          )}
          {showSecondSection && (
            <TypeAnimation
              className="text-4xl mb-4 sm:text-7xl font-bold text-[#01c4e7]"
              speed={5}
              sequence={["Joaquín Abuin"]}
              cursor={false}
              onTypingDone={handleSecondTypingDone}
              typingInterval={1000}
            />
          )}
          {showThirdSection && (
            <TypeAnimation
              className="text-4xl sm-text-7xl font-bold text-[#8c8c8c]"
              sequence={["I'm a Full Stack Developer"]}
              cursor={false}
            />
          )}
          <div>
            <motion.p
              variants={fadeIn("up", 5)}
              initial="hidden"
              whileInView={"show"}
              animate={animationsLoaded ? "show" : "hidden"}
              className="text-[#8c8c8c] py-4 max-w-[700px]"
            >
              Welcome to my world of web development. I'm a passionate
              programmer and web developer. I'm excited to share my knowledge
              and skills with you!
            </motion.p>
          </div>
        </div>

        <div className="flex-1 hidden lg:flex flex-col justify-center items-center">
          <motion.div
            variants={fadeIn("left", 6)}
            initial="hidden"
            whileInView={"show"}
            animate={animationsLoaded ? "show" : "hidden"}
            className="items-start w-full"
          >
            <p className="w-full px-2 mx-auto flex items-start text-[#efefef]">
              Get in touch!
            </p>
          </motion.div>
          <motion.ul
            variants={fadeIn("left", 6)}
            initial="hidden"
            whileInView={"show"}
            animate={animationsLoaded ? "show" : "hidden"}
            className="w-full h-auto rounded-md p-2 flex flex-col justify-around gap-4"
          >
            {/* Linkedin */}
            <motion.div
              variants={fadeIn("left", 6.3)}
              initial="hidden"
              whileInView={"show"}
              animate={animationsLoaded ? "show" : "hidden"}
              className="group"
            >
              <li className="w-full h-[46px] px-8 flex border-4 border-[#01c4e7] justify-between items-center bg-[#000020] rounded-md group-hover:scale-110 transition-all duration-500">
                <a
                  className="group flex justify-between items-center w-full text-[#8c8c8c] hover:text-[#01c4e7] "
                  href="https://www.linkedin.com/in/joaquin-abuin-31940092/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center justify-between">
                    <FaLinkedin size={30} className="mr-8" />
                  </div>
                  <div className="text-3xl">Linkedin</div>
                </a>
              </li>
            </motion.div>
            {/* Github */}
            <motion.div
              variants={fadeIn("left", 6.6)}
              initial="hidden"
              whileInView={"show"}
              animate={animationsLoaded ? "show" : "hidden"}
              className="group"
            >
              <li className="w-full h-[46px] px-8 flex border-4 border-[#01c4e7] justify-between items-center bg-[#000020] rounded-md group-hover:scale-110 transition-all duration-500">
                <a
                  className="flex justify-between items-center w-full text-[#8c8c8c] hover:text-[#01c4e7]"
                  href="https://github.com/JoaqAb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center justify-between">
                    <FaGithub size={30} className="mr-8" />
                  </div>
                  <div className="text-3xl">GitHub</div>
                </a>
              </li>
            </motion.div>
            {/* Email */}
            <motion.div
              variants={fadeIn("left", 6.9)}
              initial="hidden"
              whileInView={"show"}
              animate={animationsLoaded ? "show" : "hidden"}
              className="group"
            >
              <li className="w-full h-[46px] px-8 flex border-4 border-[#01c4e7] justify-between items-center bg-[#000020] rounded-md group-hover:scale-110 transition-all duration-500">
                <a
                  className="flex justify-between items-center w-full text-[#8c8c8c] hover:text-[#01c4e7]"
                  href="mailto:joaquinabuin@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center justify-between">
                    <HiOutlineMail size={30} className="mr-8" />
                  </div>
                  <div className="text-3xl">Email</div>
                </a>
              </li>
            </motion.div>
            {/* Resume */}
            <motion.div
              variants={fadeIn("left", 7.2)}
              initial="hidden"
              whileInView={"show"}
              animate={animationsLoaded ? "show" : "hidden"}
              className="group"
            >
              <li className="w-full h-[46px] px-8 flex border-4 border-[#01c4e7] justify-between items-center bg-[#000020] rounded-md group-hover:scale-110 transition-all duration-500">
                <a
                  className="flex justify-between items-center w-full text-[#8c8c8c] hover:text-[#01c4e7]"
                  href="https://drive.google.com/file/d/1rVmRjJ9VKCySXb9ALWQroQ0Q6EVtpHpr/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center justify-between">
                    <BsFillPersonLinesFill size={30} className="mr-8" />
                  </div>
                  <div className="text-3xl">Resume</div>
                </a>
              </li>
            </motion.div>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
