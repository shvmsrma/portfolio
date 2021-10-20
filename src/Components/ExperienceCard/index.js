import React, { Component } from "react";
import * as s from "./experienceCard.module.scss";

class ExperienceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      data: { title, description, startingDate, endDate },
    } = this.props;
    console.log(this.props.data);
    return (
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.companyName}>{title}</div>
          <div className={s.descriptionContainer}>
            {description.length > 0 &&
              description.map((desc) => {
                return <p className={s.description}>{desc}</p>;
              })}
          </div>
          <div className={s.date}>
            <div className={s.startDate}>{startingDate} </div>
            <div className={s.endDate}> {" -  " + endDate}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
