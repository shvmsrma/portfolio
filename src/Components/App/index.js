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
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
