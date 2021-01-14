import React, { Component } from "react";
import * as s from "./about.module.scss";
import Header from "../Header";
import Footer from "../Footer";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={s.container}>
        <div className={s.headerContainer}>
          <Header />
        </div>
        <div>About</div>
        <div className={s.footerContainer}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default About;
