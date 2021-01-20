import React, { Component } from "react";
import * as s from "./card.module.scss";
import Carousel from "../Carousel";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { Name, Description, Stack, Images } = this.props.data;
    const { thememode } = this.props;

    return (
      <div className={s.container}>
        <div className={s.carousel}>
          <Carousel imgArray={Images} theme={thememode} num={Images.length} />
        </div>
        {Name}
      </div>
    );
  }
}

export default Card;
