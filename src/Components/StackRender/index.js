import React, { Component } from "react";
import tagImage from "../../assets/svgs/tag.svg";
import * as s from "./stack.module.scss";
import cx from "classnames";
class StackRender extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const textList = () => {
      const textRender = this.props.data.map((d) => {
        return <div className={s.stackUsed}>{d}</div>;
      });
      return textRender;
    };
    const { theme } = this.props;

    const stackRenderStyle = cx(s.container, {
      [s.containerLight]: theme === "Light",
    });
    return (
      <div className={stackRenderStyle}>
        <div className={s.image}>
          <img src={tagImage} />
        </div>
        <div className={s.stacks}>{textList()}</div>
      </div>
    );
  }
}

export default StackRender;
