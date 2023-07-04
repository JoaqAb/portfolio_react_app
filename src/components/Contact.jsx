import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#000020] flex justify-center items-center p-4"
    >
      <form method="post" action="https://getform.io/f/169c0493-d903-4484-a133-e7af93af7205" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
        <p style={{ textShadow: '2px 2px 4px #01c4e7' }} className="text-4xl font-bold inline text-[#efefef]">
            Contact
          </p>
          <p className="text-[#efefef] py-4">
            Submit the form below or shoot me an email -
            joaquinabuin@gmail.com
          </p>
        </div>
        <input className="p-2 bg-[#e7f8fa]" type="text" placeholder="Name" name="name" />
        <input className="my-4 p-2 bg-[#e7f8fa]" type="emial" placeholder="Email" name="email" />
        <textarea className="p-2 bg-[#e7f8fa]" name="message" rows="10" placeholder="Message"></textarea>
        <button className="text-[#efefef] border-2 hover:bg-[#01c4e7] hover:border-[#01c4e7] px-8 py-3 my-8 mx-auto flex items-center">Join Forces!</button>
      </form>
    </div>
  );
};

export default Contact;
