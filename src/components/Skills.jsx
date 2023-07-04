import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import C from '../assets/c.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#000020]  text-[#efefef]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full md:w-4/5 h-full'>
            <div>
            <p style={{ textShadow: '2px 2px 4px #01c4e7' }} className="text-4xl font-bold inline text-[#efefef]">Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='pt-4 shadow shadow-[#01c4e7] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='pt-4 shadow shadow-[#01c4e7] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='pt-4 shadow shadow-[#01c4e7] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='pt-4 shadow shadow-[#01c4e7] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={C} alt="HTML icon" />
                    <p className='my-4'>C</p>
                </div>
                <div className='pt-4 shadow shadow-[#01c4e7] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='pt-4 shadow shadow-[#01c4e7] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                    <p className='my-4'>GitHub</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills