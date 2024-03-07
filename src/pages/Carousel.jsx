import React from "react";
import "../App.css";
import ProjectImag1 from "../Image/backgroundimage/junkshooter.png";
import ProjectImag2 from "../Image/backgroundimage/websitejunkshooter.png";
import ProjectImag3 from "../Image/backgroundimage/header1.jpg";

const Slider = () => {
  return (
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
            <img src={ProjectImag1} alt="" width="320" height="240" />
          </p>
        </li>
        <li className="slide">
          <div className="slide-content">
            <h2 className="slide-title">Slide #2</h2>
            <p className="slide-text">
              Nisi ratione magni ea quis animi incidunt velit voluptate dolorem
              enim possimus, nam provident excepturi ipsam nihil molestiae minus
              delectus!
            </p>
            <a href="#" className="slide-link">
              Amazing deal
            </a>
          </div>
          <p className="slide-image">
            <img src={ProjectImag2} alt="" width="320" height="240" />
          </p>
        </li>
        <li className="slide">
          <div className="slide-content">
            <h2 className="slide-title">Slide #3</h2>
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
            <img src={ProjectImag3} alt="" width="320" height="240" />
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Slider;
