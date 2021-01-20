import React, { Component } from "react";
import App from "../App";
import Projects from "../Projects";
import Blogs from "../Blogs";
import { Router } from "@reach/router";

class Route extends Component {
  render() {
    return (
      <Router>
        <App path="/" />
        <Projects path="projects" />
        <Blogs path="blogs" />
      </Router>
    );
  }
}

export default Route;
