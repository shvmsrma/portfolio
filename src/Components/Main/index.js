import React, { Component } from "react";
import * as s from "./main.module.scss";
import reactIcon from "../../assets/svgs/react.svg";
import jsIcon from "../../assets/svgs/js.svg";
import nodeIcon from "../../assets/svgs/node.svg";
import cx from "classnames";
import { connect } from "react-redux";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { theme } = this.props;
    const mainStyle = cx(s.container, {
      [s.containerLight]: theme === "Light",
    });
    return (
      <div className={mainStyle}>
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

export default connect((state) => state, null)(Main);
