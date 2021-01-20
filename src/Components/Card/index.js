import React, { Component } from "react";
import * as s from "./card.module.scss";
import Carousel from "../Carousel";
import StackRender from "../StackRender";
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
        <div className={s.details}>
          <div className={s.nameDescription}>
            <div className={s.name}>{Name}</div>
            <div className={s.description}>{Description}</div>
          </div>
          <div className={s.stack}>
            <StackRender data={Stack} theme={thememode} />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
