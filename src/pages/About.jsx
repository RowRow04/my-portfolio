import React, { useEffect } from "react";
import profileimage from "../Image/backgroundimage/profile.png";
import { FiDownload, FiLinkedin, FiFacebook, FiYoutube } from "react-icons/fi"; // nagiimport ng icon sa react

const About = () => {
  // dito na enusre na gumagana yung effect sa components
  useEffect(() => {
    // ginagamit within lang sa use effect components
    const paragraphs = document.querySelectorAll(".fadeIn");
    paragraphs.forEach((p, index) => {
      p.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <div className="container mx-auto py-8 border-t border-white">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8 relative">
          <img
            src={profileimage} // insert image source
            alt="Profile" // Alt text for accessibility
            className="rounded-full w-full  object-cover bg-gray-300"
            style={{
              borderRadius: "50%",
              background: "linear-gradient(315deg, #3575dd, #3f8bff)", // Gradient background
              boxShadow:
                "inset -50px 50px 100px #183462, inset 50px -50px 100px #5ed0ff", // Box shadow
              objectFit: "cover", // Stretchable while maintaining aspect ratio
            }}
          />
        </div>
        <div className="md:w-1/2">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">My journey</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px] text-justify">
                <h3 className="absolute left-0 text-lg font-semibold">2020</h3>
                <p>
                  At STI College Ortigas Cainta, where I finished my senior year
                  of high school, I participated in a demanding program that
                  placed an emphasis on both academics and practical skills. My
                  future academic and professional aspirations will be
                  well-prepared by the dynamic learning environment, supportive
                  community, and numerous extracurricular activities that have
                  given me invaluable experiences.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px] text-justify">
                <h3 className="absolute left-0 text-lg font-semibold">2020</h3>
                <p>
                  After completing high school at STI College Ortigas Cainta, I
                  enrolled in their computer science degree program, driven by
                  my passion for technology. I'm excited to delve into
                  cutting-edge concepts and practical applications, confident
                  that the institution's dynamic learning environment and
                  supportive community will equip me for success in the
                  ever-evolving field of computer science.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px] text-justify">
                <h3 className="absolute left-0 text-lg font-semibold">2022</h3>
                <p>
                  I started to learn programming and web development. im started
                  to create a different project and website. That will help me
                  to improve my skills in programming and web development.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px] text-justify">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <p>
                  I am still learning and improving my skills in programming and
                  web development. And still studying at STI College
                  Ortigas-Cainta. This is my journey so far. I am still learning
                  and improving my skills in programming and web development.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 button-animation">
              <a href="https://drive.google.com/file/d/1NvG_IjpCpt6BjmdKoFHWQJ4NZgyWpyG9/view?usp=drive_link">
                <FiDownload className="inline-block mr-2" /> Download Resume
              </a>
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 button-animation">
              <a href="https://www.linkedin.com/in/rogelio-esguerra-721b99206/">
                <FiLinkedin className="inline-block mr-2" /> LinkedIn
              </a>
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 button-animation">
              <a href="https://www.facebook.com/rogelio.deguxman/">
                <FiFacebook className="inline-block mr-2" /> Facebook
              </a>
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded button-animation">
              <a href="https://www.youtube.com/channel/UC_BMuwWTXctkWy7TvXSjOdQ">
                <FiYoutube className="inline-block mr-2" /> Youtube
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
