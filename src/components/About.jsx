import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Profile from "../assets/joa_pic.webp";
import "animate.css";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  return (
    <Element
      name="about"
      className="w-4/5 h-screen bg-[#000020] text-[#efefef]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] p-4 grid grid-cols-2 gap-8 w-full md:w-4/5">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pb-8"
          >
            <p className="text-4xl font-bold inline border-b-4 border-[#01c4e7]">
              About
            </p>
          </motion.div>

          <div></div>
        </div>

        <div className="max-w-[1000px] w-full md:w-4/5 grid sm:grid-cols-2 gap-8 px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center"
          >
            <img
              className="w-80 rounded-full border-4 border-[#01c4e7]"
              src={Profile}
              alt=""
            />
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <p>
              "Hello! I'm a web developer based in Argentina with a strong
              passion for learning and growing in the field. While I may not
              have extensive experience yet, I am dedicated to acquiring new
              knowledge and skills to become a competent professional. I embrace
              challenges and approach every project with dedication and hard
              work. With a positive attitude, I'm excited about the journey
              ahead and eager to connect with fellow web development enthusiasts
              who share my passion!"
            </p>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default About;
