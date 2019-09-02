import React, { Component } from "react";
import "./Layout.css"
import Slider from "../../Components/Slider/Slider";
import Arrows from "../../Components/Arrows/Arrows";
import Text from "../../Components/Text/Text";
export default class Layout extends Component {
  state = {
    direction: null,
    show: false,
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  };

  slide = (e,direction, show) => {
      e.preventDefault()
    let imagesCopy = [...this.state.images];
    if (direction === "back") {
      imagesCopy.map((images, i) => {
        if (imagesCopy[i] === 1) {
          imagesCopy[i] = 9;
        } else {
          imagesCopy[i]--;
        }
      });
    } else if (direction === "forward") {
      imagesCopy.map((images, i) => {
        if (imagesCopy[i] === 9) {
          imagesCopy[i] = 1;
        } else {
          imagesCopy[i]++;
        }
      });
    }

    this.setState({
      direction: direction,
      images: imagesCopy,
      show: show
    });
  };

  animate = boolean => {
    this.setState({
      show: boolean
    });
  };
  render() {
    return (
      <div className="container">
        <Slider
          show={this.state.show}
          images={this.state.images}
          animate={this.animate}
          direction={this.state.direction}
        />
        <Text />
        <Arrows slide={this.slide} />
      </div>
    );
  }
}
