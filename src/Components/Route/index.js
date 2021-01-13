import React, { Component } from "react";
import App from "../App";
import About from "../About";
import Blogs from "../Blogs";
import { Router } from "@reach/router";

class Route extends Component {
  render() {
    return (
      <Router>
        <App path="/" />
        <About path="about" />
        <Blogs path="blogs" />
      </Router>
    );
  }
}

export default Route;
