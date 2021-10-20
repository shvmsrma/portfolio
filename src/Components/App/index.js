import React, { Component } from "react";
import * as s from "./app.module.scss";
import Header from "../Header";
import Footer from "../Footer";
import Router from "../Router";
import backgroundImgLight from "../../assets/svgs/backgroundImgLight.webp";
import backgroundImg from "../../assets/svgs/background.jpeg";
import { connect } from "react-redux";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showHeader: true };
  }
  render() {
    const { theme } = this.props;
    const { showHeader } = this.state;
    // const happyBirthday = false;
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
        <div className={s.headerAndMain}>
          {showHeader && (
            <div className={s.headerContainer}>
              <Header />
            </div>
          )}
          <div className={s.mainContainer}>
            <Router />
          </div>
        </div>

        <div className={s.footerContainer}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect((state) => state, null)(App);
