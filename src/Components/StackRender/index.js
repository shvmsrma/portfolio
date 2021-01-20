import React, { Component } from "react";
import tagImage from "../../assets/svgs/tag.svg";
import * as s from "./stack.module.scss";
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
    const { data, theme } = this.props;
    return (
      <div className={s.container}>
        <div className={s.image}>
          <img src={tagImage} />
        </div>
        <div className={s.stacks}>{textList()}</div>
      </div>
    );
  }
}

export default StackRender;
