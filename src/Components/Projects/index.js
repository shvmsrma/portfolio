import React, { Component } from "react";
import * as s from "./projects.module.scss";
import Header from "../Header";
import Footer from "../Footer";
import cx from "classnames";
import { connect } from "react-redux";
import { Slide } from "react-awesome-reveal";
import { projectData } from "../../utils/projectData";
import Card from "../Card";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { theme } = this.props;
    const projectStyle = cx(s.container, {
      [s.containerLight]: theme === "Light",
    });
    const renderProjects = () => {
      const renderProject = projectData.map((project, key) => {
        return (
          <div className={s.cardContainer}>
            <Slide>
              <Card data={project} key={key} thememode={theme} />
            </Slide>
          </div>
        );
      });
      return renderProject;
    };
    return (
      <div className={projectStyle}>
        <div className={s.headerContainer}>
          <Header />
        </div>
        <div className={s.mainContainer}>{renderProjects()}</div>
        <div className={s.footerContainer}>
          <Footer />
        </div>
      </div>
    );
  }
}
export default connect((state) => state, null)(Projects);
