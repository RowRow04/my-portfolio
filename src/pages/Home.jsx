import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import homeImage from "../Image/backgroundimage/header1.jpg";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import "../App.css";
import Carousels from "../pages/Carousel";

const Home = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const background = document.querySelector(".background");
      const yOffset = window.pageYOffset;
      background.style.backgroundPositionY = `${yOffset * 0.5}px`; // Adjust the speed of the parallax effect
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="background relative">
        <div className="absolute inset-0 z-0">
          <img
            src={homeImage}
            alt="Welcome"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto py-8 pt-40 max-w-full">
          <h1 className="text-4xl font-bold text-center mb-8 text-white animate-fade-in">
            Discover My Portfolio
          </h1>
          <p className="text-lg text-gray-200 text-center max-w-full animate-fade-in">
            Explore a world of creativity and innovation
          </p>
          <div className="flex justify-center mt-8 animate-fade-in">
            {!buttonClicked ? (
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleClick}
              >
                View Portfolio
              </button>
            ) : (
              <p className="text-lg text-blue-500 font-bold">
                Thank you for showing interest! Redirecting...
              </p>
            )}
          </div>
          {buttonClicked && (
            <div className="flex justify-center mt-4 animate-fade-in">
              <Link
                to="/portfolio"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Go to Portfolio
              </Link>
            </div>
          )}
        </div>
      </div>
      <Portfolio style={{ position: "relative", zIndex: 100 }} />
      <Contact />
      <About />
      <Carousels />
    </div>
  );
};

export default Home;
