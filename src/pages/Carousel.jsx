import React from "react";
import "../App.css";

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
            <h2 className="slide-title">Slide #1</h2>
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
            <img
              src="https://images.samsung.com/is/image/samsung/assets/ph/apps/gaming-hub/01_gameLauncher_section_kv_mo.jpg?$720_N_JPG$"
              alt="stuff"
              width="320"
              height="240"
            />
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
            <img
              src="https://placeimg.com/320/240/animals"
              alt="stuff"
              width="320"
              height="240"
            />
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
            <img
              src="https://placeimg.com/320/240/any"
              alt="stuff"
              width="320"
              height="240"
            />
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Slider;
