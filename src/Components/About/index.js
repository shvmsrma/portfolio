import React, { Component } from "react";
import * as s from "./about.module.scss";
import Header from "../Header";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        About
      </div>
    );
  }
}

export default About;
