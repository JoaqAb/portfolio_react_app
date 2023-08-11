import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Web1 from "../assets/web_1.webp";
import Web2 from "../assets/web_2.webp";
import Web3 from "../assets/web_3.webp";
import Web4 from "../assets/web_4.webp";

const Works = () => {
  return (
    <div name="work" className="w-full min-h-screen bg-[#000020] text-[#efefef] mb-16 flex justify-center items-center">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full md:w-4/5 overflow-hidden">
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount: 0.3}}
        className="pb-8">
          <p
            className="text-4xl font-bold inline text-[#01c4e7]"
          >
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </motion.div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Grid Item 1 */}
          <motion.div
          href='https://1kmmas.netlify.app/'
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: true, amount: 0.3}} 
          className="group relative overflow-hidden border-2 border-[#efefef] rounded-xl">
            {/* Hover Effect */}
            <div
              className="group-hover:bg-black/70 w-full h-full absolute
          z-10 transition-all duration-300"
            ></div>
            {/* Image */}
            <img
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              className="group-hover:scale-125 transition-all duration-500"
              src={Web1}
              alt=""
            />
            {/* Pretitle */}
            <div
              className="absolute -bottom-full left-12
          group-hover:bottom-8 transition-all duration-700 z-20"
            >
              <span>HTML - Bootstrap</span>
            </div>
            {/* Title */}
            <div
              className="absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-500 z-20"
            >
              <a href="/">
                <span className="text-3xl text-[#efefef]">E-commerce</span>
              </a>
            </div>
            <div
              className="grid grid-cols-2 gap-4 absolute -bottom-full left-12
              group-hover:bottom-1 transition-all duration-500 z-20"
            >
              <a href="https://1kmmas.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button className="text-[#efefef] border-2 hover:bg-[#01c4e7] hover:border-[#01c4e7] px-8 mt-4 mx-auto flex items-center rounded-md">
                Demo
              </button>
              </a>
              <a href="https://github.com/JoaqAb/team_strongers_ecommerce" target="_blank" rel="noopener noreferrer">
              <button className="text-[#efefef] border-2 hover:bg-[#01c4e7] hover:border-[#01c4e7] px-8 mt-4 mx-auto flex items-center rounded-md">
                Code
              </button>
              </a>
            </div>
          </motion.div>
          
          {/* Grid Item 2 */}
          <motion.div variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: true, amount: 0.3}}
          className="group relative overflow-hidden border-2 border-[#efefef] rounded-xl">
            {/* Hover Effect */}
            <div
              className="group-hover:bg-black/70 w-full h-full absolute
          z-10 transition-all duration-300"
            ></div>
            {/* Image */}
            <img
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              className="group-hover:scale-125 transition-all duration-500"
              src={Web2}
              alt=""
            />
            {/* Pretitle */}
            <div
              className="absolute -bottom-full left-12
          group-hover:bottom-8 transition-all duration-700 z-20"
            >
              <span>HTML - CSS - JavaScript</span>
            </div>
            {/* Title */}
            <div
              className="absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-500 z-20"
            >
              <a href="/">
                <span className="text-3xl text-[#efefef]">Personal Web Site</span>
              </a>
            </div>
            <div
              className="grid grid-cols-2 gap-4 absolute -bottom-full left-12
              group-hover:bottom-1 transition-all duration-500 z-20"
            >
              <a href="https://joaquinfirstpersonal.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button className="text-[#efefef] border-2 hover:bg-[#01c4e7] hover:border-[#01c4e7] px-8 mt-4 mx-auto flex items-center rounded-md">
                Demo
              </button>
              </a>
              <a href="https://github.com/JoaqAb/my_website" target="_blank" rel="noopener noreferrer">
              <button className="text-[#efefef] border-2 hover:bg-[#01c4e7] hover:border-[#01c4e7] px-8 mt-4 mx-auto flex items-center rounded-md">
                Code
              </button>
              </a>
            </div>
          </motion.div>
         
          {/* Grid Item 3 */}
          <motion.div variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: true, amount: 0.3}}
          className="group relative overflow-hidden border-2 border-[#efefef] rounded-xl">
            {/* Hover Effect */}
            <div
              className="group-hover:bg-black/70 w-full h-full absolute
          z-10 transition-all duration-300"
            ></div>
            {/* Image */}
            <img
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              className="group-hover:scale-125 transition-all duration-500"
              src={Web3}
              alt=""
            />
            {/* Pretitle */}
            <div
              className="absolute -bottom-full left-12
          group-hover:bottom-8 transition-all duration-700 z-20"
            >
              <span>React - Tailwind</span>
            </div>
            {/* Title */}
            <div
              className="absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-500 z-20"
            >
              <a href="/">
                <span className="text-3xl text-[#efefef]">Portfolio</span>
              </a>
            </div>
            <div
              className="grid grid-cols-2 gap-4 absolute -bottom-full left-12
              group-hover:bottom-1 transition-all duration-500 z-20"
            >
              <a href="https://joaquinabuin.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button className="text-[#efefef] border-2 hover:bg-[#01c4e7] hover:border-[#01c4e7] px-8 mt-4 mx-auto flex items-center rounded-md">
                Demo
              </button>
              </a>
              <a href="https://github.com/JoaqAb/portfolio_react_app" target="_blank" rel="noopener noreferrer">
              <button className="text-[#efefef] border-2 hover:bg-[#01c4e7] hover:border-[#01c4e7] px-8 mt-4 mx-auto flex items-center rounded-md">
                Code
              </button>
              </a>
            </div>
          </motion.div>
          
          {/* Grid Item 4 */}
          <motion.div variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: true, amount: 0.3}}
          className="group relative overflow-hidden border-2 border-[#efefef] rounded-xl">
            {/* Hover Effect */}
            <div
              className="group-hover:bg-black/70 w-full h-full absolute
          z-10 transition-all duration-300"
            ></div>
            {/* Image */}
            <img
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              className="group-hover:scale-125 transition-all duration-500"
              src={Web4}
              alt=""
            />
            {/* Pretitle */}
            <div
              className="absolute -bottom-full left-12
          group-hover:bottom-8 transition-all duration-700 z-20"
            >
              <span>HTML - CSS - JavaScript</span>
            </div>
            {/* Title */}
            <div
              className="absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-500 z-20"
            >
              <a href="/">
                <span className="text-3xl text-[#efefef]">MusicFlow</span>
              </a>
            </div>
            <div
              className="grid grid-cols-2 gap-4 absolute -bottom-full left-12
              group-hover:bottom-1 transition-all duration-500 z-20"
            >
              <a href="https://musicflow.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button className="text-[#efefef] border-2 hover:bg-[#01c4e7] hover:border-[#01c4e7] px-8 mt-4 mx-auto flex items-center rounded-md">
                Demo
              </button>
              </a>
              <a href="https://github.com/JoaqAb/MusicFlow" target="_blank" rel="noopener noreferrer">
              <button className="text-[#efefef] border-2 hover:bg-[#01c4e7] hover:border-[#01c4e7] px-8 mt-4 mx-auto flex items-center rounded-md">
                Code
              </button>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Works;
