import React, { Component } from "react";
import * as s from "./main.module.scss";
import reactIcon from "../../assets/svgs/react.svg";
import jsIcon from "../../assets/svgs/js.svg";
import nodeIcon from "../../assets/svgs/node.svg";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={s.container}>
        <div>
          <p>Hello,I am Shivam Sharma</p>
          <p>Full stack Javascript developer(trying to be)</p>
          <div className={s.icons}>
            <img src={jsIcon} alt={"Javascript"} />
            <img src={reactIcon} alt={"React"} />
            <img src={nodeIcon} alt={"Node"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
