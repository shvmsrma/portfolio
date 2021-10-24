import React, { Component } from "react";
import * as s from "./main.module.scss";

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
            <Autotype textToDisplay={"Hello,I am Shivam Sharma"} />
          </Bounce>
          <div className={s.description}>
            I am a Full Stack JavaScript Developer currently working at
            Zettabytes Inc (Zbio) as a Member of the Technical Staff. Working on
            Building Roost-Desktop which helps developers in collaborating with
            each other easily and also that is a full-scale Kubernetes platform.
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => state, null)(Main);
