import React, { Component } from "react";
import * as s from "./main.module.scss";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className={s.container}>Main</div>;
  }
}

export default Main;
