import React, { Component } from "react";
import * as s from "./app.module.scss";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
class App extends Component {
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
        <div className={s.mainContainer}>
          <Main />
        </div>

        <div className={s.footerContainer}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
