import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <div name="contact" className="w-full min-h-screen bg-[#000020] text-[#efefef] mb-16 flex justify-center items-center">
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full md:w-4/5 overflow-hidden'>
        <div className="container ">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 mb-8">
              <motion.div
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}} >
                <p className="text-4xl font-bold inline text-[#01c4e7]">
                  Let's work <br /> together!
                </p>                
              </motion.div>
            </div>
            
            <motion.form
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
              method="post"
              action="https://getform.io/f/169c0493-d903-4484-a133-e7af93af7205"
              className="flex justify-center items-center border rounded-md p-4 lg:ml-16 flex-col w-full"
            >
              <input
                className="p-2 bg-[#ffffff] w-full max-w-[500px] rounded-md"
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                className="my-4 p-2 bg-[#ffffff] w-full max-w-[500px] rounded-md"
                type="emial"
                placeholder="Email"
                name="email"
              />
              <textarea
                className="p-2 bg-[#ffffff] w-full max-w-[500px] rounded-md"
                name="message"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button className="text-[#efefef] border-2 hover:bg-[#01c4e7] hover:border-[#01c4e7] px-8 py-2 mt-4 mx-auto flex items-center rounded-md">
                Send
              </button>
            </motion.form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
