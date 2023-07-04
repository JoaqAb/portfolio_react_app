import React from 'react';
import Profile from '../assets/joa_pic.webp'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'


const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });
  return (
    
    <div className='w-full h-screen bg-[#000020] text-[#efefef]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px]  p-4 grid grid-cols-2 gap-8 w-full md:w-4/5'>
                <motion.div 
                variants={fadeIn('right', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}
                className='pb-8'>
                     <p style={{ textShadow: '2px 2px 4px #01c4e7' }} className="text-4xl font-bold inline text-[#efefef]">About</p>
                </motion.div>
                
                <div></div>
            </div>

            <div className='max-w-[1000px] w-full md:w-4/5 grid sm:grid-cols-2 gap-8 px-4'>
                <motion.div 
                variants={fadeIn('opacity', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}
                className='flex justify-center items-center'>
                    <img className='w-60 max-w-80 rounded-full border-4 border-[#01c4e7]' src={Profile} alt="" />
                </motion.div>
                <motion.div
                variants={fadeIn('left', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}>
                    <p>"Hello! I'm a web developer based in Argentina with a strong passion for learning and growing in the field. 
              While I may not have extensive experience yet, I am dedicated to acquiring new knowledge and skills to become a competent professional. 
              I embrace challenges and approach every project with dedication and hard work. With a positive attitude, 
              I'm excited about the journey ahead and eager to connect with fellow web development enthusiasts who share my passion!"</p>    
                </motion.div >
            </div>
        </div>
    </div>
  );
};

export default About;