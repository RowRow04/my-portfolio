import { useEffect, useState } from "react";
import HTMLImage from "../Image/logo/html.png";
import CSSImage from "../Image/logo/css.png";
import JavaScriptImage from "../Image/logo/javascript.png";
import ReactImage from "../Image/logo/react.png";
import AdobeImage from "../Image/logo/adobephotoshop.png";
import BlenderImage from "../Image/logo/blender.png";
import GithubImage from "../Image/logo/githublogo.png";
import JavaImage from "../Image/logo/javalogo.png";
import UnityImage from "../Image/logo/unity.png";
import PythonImage from "../Image/logo/pythonlogo.png";
import Project1 from "../Image/backgroundimage/junkshooter.png";
import Project2 from "../Image/backgroundimage/websitejunkshooter.png";

import "../App.css";

const Portfolio = () => {
  const skills = [
    { name: "HTML", image: HTMLImage },
    { name: "CSS", image: CSSImage },
    { name: "JavaScript", image: JavaScriptImage },
    { name: "React", image: ReactImage },
    { name: "Adobe Photoshop", image: AdobeImage },
    { name: "Blender", image: BlenderImage },
    { name: "Github", image: GithubImage },
    { name: "Java", image: JavaImage },
    { name: "Unity", image: UnityImage },
    { name: "Python", image: PythonImage },
  ];

  // State to track if the animation should be triggered
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    // Trigger the animation after a short delay when the component mounts
    const timer = setTimeout(() => {
      setAnimateSkills(true);
    }, 100);

    // Clear the timeout when the component unmounts to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container m-auto px-4 sm:py-12">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="flex flex-col sm:flex-row gap-10 mt-11">
        <div className="border border-gray-500 rounded-md p-5 flex-1">
          <img src={Project1} className="w-full h-auto" alt="Project 1" />
          <h3 className="text-2xl font-semibold mt-8">Project 1 Title</h3>
          <p className="text-gray-400 text-sm mt-2">Project 1 description.</p>
          {/* Add buttons for project actions */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            View Project
          </button>
        </div>
        <div className="border border-gray-500 rounded-md p-5 flex-1">
          <img src={Project2} className="w-full h-auto" alt="Project 2" />
          <h3 className="text-2xl font-semibold mt-8">Project 2 Title</h3>
          <p className="text-gray-400 text-sm mt-2">Project 2 description.</p>
          {/* Add buttons for project actions */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            View Project
          </button>
        </div>
      </div>
      <div className="container mx-auto py-8 bg-black text-white">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Skills
        </h1>
        <div className="flex justify-center mt-8 flex-wrap">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`max-w-xs w-54 h-54 rounded overflow-hidden shadow-lg m-4 ${
                animateSkills ? "animate__animated animate__fadeInLeft" : ""
              }`}
            >
              <img src={skill.image} alt={skill.name} className="w-full h-48" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{skill.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
