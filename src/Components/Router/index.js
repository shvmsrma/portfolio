import React, { Component } from "react";
import Main from "../Main";
import Projects from "../Projects";
import Blogs from "../Blogs";
import { Route, Switch } from "react-router-dom";

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
        </Switch>
      </>
    );
  }
}

export default Router;
