import React from "react";
import "./Arrows.css"
const Arrows = ({ slide }) => {
  return (
    <div className="arrows-container">
      <a href="/#" className="gray arrow" onClick={(e) => slide(e,"back", true)}>
        <img alt="arrow-back"src={require("../../assets/icons/arrow-gray-left.png")}></img>
      </a>
      <a href="/#" onClick={(e) => slide(e,"forward", true)} className="blue arrow">
        <img alt="arrow-forward"src={require("../../assets/icons/arrow-blue-right.png")}></img>
      </a>
    </div>
  );
};

export default Arrows;
