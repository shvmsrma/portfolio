import React, { Component } from "react";
import * as s from "./header.module.scss";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className={s.container}>Header</div>;
  }
}

export default Header;
