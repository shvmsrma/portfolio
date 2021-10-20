import React, { Component } from "react";
import * as s from "./main.module.scss";
import reactIcon from "../../assets/svgs/react.svg";
import jsIcon from "../../assets/svgs/js.svg";
import nodeIcon from "../../assets/svgs/node.svg";
import cx from "classnames";
import { connect } from "react-redux";

import { Bounce } from "react-awesome-reveal";
import Autotype from "../Autotype";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textRender: "",
    };
  }

  render() {
    const { theme } = this.props;
    const mainStyle = cx(s.container, {
      [s.containerLight]: theme === "Light",
    });
    return (
      <div className={mainStyle}>
        <div className={s.image}>SHIVAM SHARMA</div>
        <div className={s.mainContent}>
          <Bounce>
            <Autotype
              textToDisplay={
                "Hello,I am Shivam Sharma, Full stack Javascript developer..."
              }
            />
          </Bounce>
        </div>
      </div>
    );
  }
}

export default connect((state) => state, null)(Main);
