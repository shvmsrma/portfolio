import React, { Component } from "react";
import Main from "../Main";
import Projects from "../Projects";
import Blogs from "../Blogs";
import { Route, Switch } from "react-router-dom";
import Experience from "../Experience";

class Router extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>

          <Route path="/projects" exact>
            <Projects />
          </Route>

          <Route path="/blogs" exact>
            <Blogs />
          </Route>
          <Route path="/experience" exact>
            <Experience />
          </Route>
        </Switch>
      </>
    );
  }
}

export default Router;
