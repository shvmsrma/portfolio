import React, { Component } from "react";
import * as s from "./projects.module.scss";
import Header from "../Header";
import Footer from "../Footer";
import backgroundImgLight from "../../assets/svgs/backgroundImgLight.jpg";
import backgroundImg from "../../assets/svgs/mainbackground.jpg";
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
    const renderProjects = () => {
      const renderProject = projectData.map((project, key) => {
        return (
          <Slide>
            <Card data={project} key={key} thememode={theme} />
          </Slide>
        );
      });
      return renderProject;
    };
    return (
      <div className={s.container}>
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
