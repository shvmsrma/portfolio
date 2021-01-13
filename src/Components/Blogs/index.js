import React, { Component } from "react";
import * as s from "./blogs.module.scss";
import Header from "../Header";
class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        Blogs
      </div>
    );
  }
}

export default Blogs;
