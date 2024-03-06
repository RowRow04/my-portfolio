import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectImage1 from "../Image/junkshooter.png";
import ProjectImage2 from "../Image/websitejunkshooter.png";
import ProjectVideo1 from "../Video/Arkadia.mp4";
import HTMLImage from "../Image/logo/html.png"; // Import skill images
import CSSImage from "../Image/logo/cssicon.png";
import JavaScriptImage from "../Image/logo/javascript.png";
import ReactImage from "../Image/logo/react.png";
// Import other skill images...

const Portfolio = () => {
  const projects = [
    {
      title: "Junk Shooter",
      description:
        "The game is a top-down and educational game. “Junk Shooter” is a game that teaches children especially ages 9-12 about different facts about healthy foods while raising awareness about unhealthy foods. It is a two-dimensional game that is played in landscape. It has controls to maneuver the character, to shoot, and use powerups.The target audience for the game are children ages 9-12. At this young age, the children would be able to know how to differentiate healthy foods from unhealthy foods and their importance and facts.  ",
      imageUrl: ProjectImage1,
    },
    {
      title: "Website For JunkShooter",
      description:
        "Website for Junk Shooter so that they can check the update or new in the game app also for advertising the game.",
      imageUrl: ProjectImage2,
    },
    {
      title: "Arkadia- Mobile Game App",
      description:
        "Arkadia is an educational adventure game set on an island called ‘Arkadia’. The player embarks on a journey, tackling many different challenges and tasks on the island. They get to explore the island and encounter different critically endangered animals that reside there. The player must protect the animals against poachers and their habitats from illegal loggers. The game is designed for children aged 10 to 15 and offers educational content about critically endangered animals in the Philippines. Arkadia provides a fun and educational experience for users. It has elements of 3D and 2D graphics, a fantasy theme, and is available on Android mobile devices.",
      videoUrl: ProjectVideo1,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const skills = [
    { name: "HTML", image: HTMLImage },
    { name: "CSS", image: CSSImage },
    { name: "JavaScript", image: JavaScriptImage },
    { name: "React", image: ReactImage },

    // Add other skills with their images...
  ];

  return (
    <div className="container mx-auto py-8 bg-white text-black">
      <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
      <Slider {...sliderSettings}>
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-300 shadow-md rounded-lg p-4">
            {project.videoUrl ? (
              <video controls className="w-full h-auto rounded-lg mb-4">
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-41 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-xl font-bold mb-2 text-justify">
              {project.title}
            </h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center mt-8">
        <p className="text-2xl font-bold">More projects coming soon...</p>
      </div>
      <h1 className="text-4xl font-bold text-center mb-8 text-black">Skills</h1>
      <div className="flex justify-center mt-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center mr-4">
            <img
              src={skill.image}
              alt={skill.name}
              className="w-10 h-10 mb-2"
            />
            <p className="text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
