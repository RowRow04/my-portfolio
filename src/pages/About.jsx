import React, { useEffect } from "react"; // Import React and useEffect
import profileimage from "../Image/backgroundimage/profile.png";
import { FiDownload, FiLinkedin, FiFacebook, FiYoutube } from "react-icons/fi"; // Import icons from react-icons

const About = () => {
  // Ensure that your component is a functional component
  useEffect(() => {
    // Use useEffect within the functional component
    const paragraphs = document.querySelectorAll(".fadeIn");
    paragraphs.forEach((p, index) => {
      p.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8 relative">
          <img
            src={profileimage}
            alt="Profile"
            className="rounded-full w-full h-full object-cover bg-gray-300"
            style={{ borderRadius: "61% 39% 52% 48% / 39% 46% 54% 61% " }}
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-lg mb-4 fadeIn text-justify">
            Hello there! I'm Rogelio A. Esguerra Jr., a recent graduate with a
            degree in Computer Science from the beautiful islands of the
            Philippines. Let me share a bit about my background and aspirations
            with you.
          </p>
          <p className="text-lg mb-4 fadeIn text-justify">
            <h1>Academic Journey:</h1>
            My journey into the world of technology began when I enrolled in the
            prestigious Sti College Ortigas-Cainta Computer Science program.
            Over the course of my academic years, I immersed myself in a wide
            range of subjects, from algorithms and data structures to software
            engineering and artificial intelligence. I embraced every
            opportunity to learn and grow, participating in hackathons, coding
            competitions, and research projects. Through these experiences, I
            honed my problem-solving skills, cultivated a passion for
            innovation, and developed a deep understanding of the principles
            that underpin modern computing.
          </p>
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
