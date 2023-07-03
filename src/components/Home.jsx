import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import "animate.css";

const Home = () => {
  const [showFirstSection, setShowFirstSection] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);

  const handleSecondTypingDone = () => {
    setShowThirdSection(true);
  };

  const handleThirdTypingDone = () => {
    setShowLastParagraph(true);
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

    return () => {
      clearTimeout(firstSectionTimeout);
      clearTimeout(secondSectionTimeout);
      clearTimeout(thirdSectionTimeout);
    };
  }, []);

  return (
    <div name="home" className="w-full h-screen bg-[#000020]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full md:w-4/5 h-full">
        {showFirstSection && (
          <TypeAnimation
            className="text-[#efefef]"
            sequence={["Hi, my name is"]}
            cursor={false}
          />
        )}
        {showSecondSection && (
          <TypeAnimation
            className="text-4xl sm:text-7xl font-bold text-[#01c4e7]"
            speed={5}
            sequence={["Joaquin Abuin"]}
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
            onTypingDone={handleThirdTypingDone}
          />
        )}
        <div class="animate__animated animate__fadeInUp animate__delay-5s" >
          <p className="text-[#8c8c8c] py-4 max-w-[700px]">
            Welcome to my world of web development. I'm a passionate programmer
            and web developer. I'm excited to share my knowledge and skills with
            you!
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default Home;
