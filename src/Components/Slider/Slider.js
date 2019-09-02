import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Slider.css";
const Slider = ({ show, images, animate, direction }) => {
  return (
    <CSSTransition
      classNames={`slider-${direction}`}
      in={show}
      timeout={600}
      onEntered={() => animate(false)}
    >
      <div className="slider-container">
        <div className="top">
          <img
            alt="slider_image"
            className={
              "slider-image" && show === true
                ? "my-node-enter my-node-enter-active my-node-exit-active"
                : null
            }
            src={require(`../../assets/gallery/slider-image-${images[8]}.jpg`)}
          />
          <img
            alt="slider_image"
            src={require(`../../assets/gallery/slider-image-${images[7]}.jpg`)}
          />
          <img
            alt="slider_image"
            src={require(`../../assets/gallery/slider-image-${images[6]}.jpg`)}
          />
          <img
            alt="slider_image"
            src={require(`../../assets/gallery/slider-image-${images[5]}.jpg`)}
          />
          <img
            alt="slider_image"
            src={require(`../../assets/gallery/slider-image-${images[4]}.jpg`)}
          />
        </div>

        <div className="bottom">
          <img
            alt="slider_image"
            src={require(`../../assets/gallery/slider-image-${images[3]}.jpg`)}
          />
          <img
            alt="slider_image"
            src={require(`../../assets/gallery/slider-image-${images[2]}.jpg`)}
          />
          <img
            alt="slider_image"
            src={require(`../../assets/gallery/slider-image-${images[1]}.jpg`)}
          />
          <img
            alt="slider_image"
            src={require(`../../assets/gallery/slider-image-${images[0]}.jpg`)}
          />
        </div>
      </div>
    </CSSTransition>
  );
};

export default Slider;
