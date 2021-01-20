import React, { Component } from "react";
import * as s from "./carousel.module.scss";
import rightArrow from "../../assets/svgs/rightarrow.svg";
import leftArrow from "../../assets/svgs/leftarrow.svg";
import rightArrowDark from "../../assets/svgs/rightarrowDark.svg";
import leftArrowDark from "../../assets/svgs/leftarrowDark.svg";
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImg: 0,
    };
    this.changeImage = this.changeImage.bind(this);
  }
  changeImage(type) {
    const { num } = this.props;
    console.log(type);
    if (type === "next") {
      if (this.state.selectedImg < 2) {
        this.setState({ selectedImg: this.state.selectedImg + 1 });
      } else {
        this.setState({ selectedImg: 0 });
      }
    } else {
      if (this.state.selectedImg > 0) {
        this.setState({ selectedImg: this.state.selectedImg - 1 });
      } else {
        this.setState({ selectedImg: 2 });
      }
    }
  }
  render() {
    const { selectedImg } = this.state;
    const { imgArray, theme, num } = this.props;
    console.log(this.props);
    console.log(this.state.selectedImg);

    return (
      <div className={s.container}>
        <div className={s.imageContainer}>
          <img
            src={theme === "Light" ? leftArrow : leftArrowDark}
            className={s.arrow}
            onClick={() => this.changeImage("previous")}
          />
          <img src={imgArray[selectedImg]} className={s.selectedImg} />
          <img
            src={theme === "Light" ? rightArrow : rightArrowDark}
            className={s.arrow}
            onClick={() => this.changeImage("next")}
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
