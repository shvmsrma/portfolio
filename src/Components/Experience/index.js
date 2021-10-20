import React, { Component } from "react";
import * as s from "./experience.module.scss";
import { experienceData } from "../../utils/experienceData";
import ExperienceCard from "../ExperienceCard";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { theme } = this.props;
    return (
      <div className={s.container}>
        {experienceData.map((data) => {
          return <ExperienceCard data={data} theme={theme} />;
        })}
      </div>
    );
  }
}

export default Experience;
