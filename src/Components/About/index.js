import React, { Component } from "react";
import * as s from "./about.module.scss";
import Header from "../Header";
import Footer from "../Footer";
import backgroundImgLight from "../../assets/svgs/backgroundImgLight.jpg";
import backgroundImg from "../../assets/svgs/mainbackground.jpg";
import { connect } from "react-redux";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { theme } = this.props;
    return (
      <div
        className={s.container}
        style={{
          backgroundImage:
            theme === "Light"
              ? `url(${backgroundImgLight})`
              : `url(${backgroundImg})`,
        }}
      >
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
export default connect((state) => state, null)(About);
