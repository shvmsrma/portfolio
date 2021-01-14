import React, { Component } from "react";
import * as s from "./footer.module.scss";
import instagramIcon from "../../assets/svgs/instagram.svg";
import facebookIcon from "../../assets/svgs/facebook.svg";
import gmailIcon from "../../assets/svgs/gmail.svg";
import twitterIcon from "../../assets/svgs/twitter.svg";
import linkedinIcon from "../../assets/svgs/linkedin.svg";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={s.container}>
        <div className={s.iconFirst}>
          <div>Connect with me</div>

          <a>
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
        <div className={s.icon}>
          <a>
            <img src={facebookIcon} alt="Facebook" />
          </a>
        </div>
        <div className={s.icon}>
          <a>
            <img src={gmailIcon} alt="Gmail" />
          </a>
        </div>
        <div className={s.icon}>
          <a>
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </div>
        <div className={s.icon}>
          <a>
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
