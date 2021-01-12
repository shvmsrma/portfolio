import React, { Component } from "react";
import * as s from "./footer.module.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className={s.container}>Footer</div>;
  }
}

export default Footer;
