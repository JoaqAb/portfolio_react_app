import React from "react";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";
import Web1 from "../assets/web_1.webp";
import Web2 from "../assets/web_2.webp";
import Web3 from "../assets/web_3.webp";
import Web4 from "../assets/web_4.webp";

const Works = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#000020] text-[#efefef]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full md:w-4/5 h-full">
        <div className="pb-8">
          <p
            style={{ textShadow: "2px 2px 4px #01c4e7" }}
            className="text-4xl font-bold inline text-[#efefef]"
          >
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Grid Item 1 */}
          <div className="group relative overflow-hidden border-2 border-[#efefef] rounded-xl">
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
              <span>Design</span>
            </div>
            {/* Title */}
            <div
              className="absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-500 z-20"
            >
              <a href="/">
                <span className="text-3xl text-[#efefef]">Project Title</span>
              </a>
            </div>
          </div>
          
          {/* Grid Item 2 */}
          <div className="group relative overflow-hidden border-2 border-[#efefef] rounded-xl">
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
              <span>Design</span>
            </div>
            {/* Title */}
            <div
              className="absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-500 z-20"
            >
              <a href="/">
                <span className="text-3xl text-[#efefef]">Project Title</span>
              </a>
            </div>
          </div>
         
          {/* Grid Item 3 */}
          <div className="group relative overflow-hidden border-2 border-[#efefef] rounded-xl">
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
              <span>Design</span>
            </div>
            {/* Title */}
            <div
              className="absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-500 z-20"
            >
              <a href="/">
                <span className="text-3xl text-[#efefef]">Project Title</span>
              </a>
            </div>
          </div>
          
          {/* Grid Item 4 */}
          <div className="group relative overflow-hidden border-2 border-[#efefef] rounded-xl">
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
              <span>Design</span>
            </div>
            {/* Title */}
            <div
              className="absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-500 z-20"
            >
              <a href="/">
                <span className="text-3xl text-[#efefef]">Project Title</span>
              </a>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Works;
