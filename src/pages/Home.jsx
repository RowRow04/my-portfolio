import { useState, useEffect } from "react";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import "../App.css";
import Porfile from "../Image/backgroundimage/profile.png";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const background = document.querySelector(".background");
      const yOffset = window.pageYOffset;
      background.style.backgroundPositionY = `${yOffset * 0.5}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
        <div>
          <h2 className="font-bold text-4xl">Hello, I'm Rogelio,</h2>
          <div>
            <h2 className="font-bold text-4xl mt-1 gradiant-text">
              frontend developer
            </h2>
          </div>
          <div>
            <p className="mt-4 text-gray-400 text-left text-justify">
              Former expert in internet Meme, looking to apply growth abilities
              with an emphasis on cooperation and creativity.
            </p>
            <a
              href="https://drive.google.com/file/d/1NvG_IjpCpt6BjmdKoFHWQJ4NZgyWpyG9/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                Download resume
              </button>
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
            <img
              src={Porfile}
              alt="Profile"
              className="rounded-full w-full h-full object-cover bg-gray-300"
              style={{ borderRadius: "61% 39% 52% 48% / 39% 46% 54% 61% " }}
            />
          </div>
        </div>
      </div>
      <Portfolio style={{ position: "relative", zIndex: 100 }} />
      <Contact />
      <About />
    </div>
  );
};

export default Home;
