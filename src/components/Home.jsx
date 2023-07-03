import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#000020]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full md:w-4/5 h-full'>
            <p className='text-[#efefef]'>Hi, my name is</p>      
            <h1 className='text-4xl sm:text-7xl font-bold text-[#01c4e7]'>Joaquin Abuin</h1>
            <h2 className='text-4xl sm-text-7xl font-bold text-[#8c8c8c]'>I'm a Full Stack Developer</h2>
            <p className='text-[#8c8c8c] py-4 max-w-[700px]'>
            Welcome to my world of web development. I'm passionate programmer and web developer. I'm excited to share my knowledge and skills with you!
            </p>
            <div>
                <button className='text-[#efefef] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#01c4e7] hover:border-[#01c4e7]'>View Work
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
                </span>
                </button>
            </div>    
        </div>
        
    </div>
  );
};

export default Home;