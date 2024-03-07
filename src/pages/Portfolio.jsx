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
import ProjectImage1 from "../Image/backgroundimage/junkshooter.png";
import ProjectImage2 from "../Image/backgroundimage/websitejunkshooter.png";
import ProjectImage3 from "../Image/backgroundimage/header.jpg";

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
    <div>
      <div className="slider">
        <input type="radio" name="toggle" id="btn-1" defaultChecked />
        <input type="radio" name="toggle" id="btn-2" />
        <input type="radio" name="toggle" id="btn-3" />
        <div className="slider-controls">
          <label htmlFor="btn-1"></label>
          <label htmlFor="btn-2"></label>
          <label htmlFor="btn-3"></label>
        </div>
        <ul className="slides">
          <li className="slide">
            <div className="slide-content">
              <h2 className="slide-title">My Project#1</h2>
              <p className="slide-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                dignissimos commodi eos totam perferendis possimus dolorem,
                deleniti vitae harum? Enim.
              </p>
              <a href="#" className="slide-link">
                Learn more
              </a>
            </div>
            <p className="slide-image">
              <img src={ProjectImage1} alt="stuff" width="450" height="500" />
            </p>
          </li>
          <li className="slide">
            <div className="slide-content">
              <h2 className="slide-title">My Project#2</h2>
              <p className="slide-text">
                Nisi ratione magni ea quis animi incidunt velit voluptate
                dolorem enim possimus, nam provident excepturi ipsam nihil
                molestiae minus delectus!
              </p>
              <a href="#" className="slide-link">
                Amazing deal
              </a>
            </div>
            <p className="slide-image">
              <img src={ProjectImage2} alt="stuff" width="450" height="500" />
            </p>
          </li>
          <li className="slide">
            <div className="slide-content">
              <h2 className="slide-title">My Project#3</h2>
              <p className="slide-text">
                Quisquam quod ut quasi, vero obcaecati laudantium asperiores
                corporis ad atque. Expedita fugit dicta maxime vel doloribus
                sequi, facilis dignissimos.
              </p>
              <a href="#" className="slide-link">
                Get started
              </a>
            </div>
            <p className="slide-image">
              <img src={ProjectImage3} alt="stuff" width="450" height="500" />
            </p>
          </li>
        </ul>
      </div>

      <div className="container mx-auto py-8 bg-white text-black">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">
          Skills
        </h1>

        <div className="flex justify-center mt-8 flex-wrap">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`max-w-xs w-54 h-54 rounded overflow-hidden shadow-lg m-4 transition duration-300 transform hover:scale-105 ${
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
