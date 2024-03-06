import React, { useEffect } from "react";
import profileimage from "../Image/backgroundimage/profile.png";

const About = () => {
  useEffect(() => {
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
          {/* Use the imported profileimage */}
          <img
            src={profileimage}
            alt="Profile"
            className="rounded-full w-full h-full object-cover bg-gray-300"
            style={{ borderRadius: "61% 39% 52% 48% / 39% 46% 54% 61% " }} // Set border radius to 90px
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
          <p className="text-lg mb-4 fadeIn text-justify">
            I also don't have experience in back-end development with Node.js,
            Express, and MongoDB.
          </p>
          <p className="text-lg fadeIn text-justify">
            In my free time, I enjoy contributing to open-source projects and
            learning new technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
