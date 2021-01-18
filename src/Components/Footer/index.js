import React, { Component } from "react";
import * as s from "./footer.module.scss";
import instagramIcon from "../../assets/svgs/instagram.svg";
import facebookIcon from "../../assets/svgs/facebook.svg";
import gmailIcon from "../../assets/svgs/gmail.svg";
import twitterIcon from "../../assets/svgs/twitter.svg";
import linkedinIcon from "../../assets/svgs/linkedin.svg";
import Tooltip from "../Tooltip/tooltip";
import hashnodeImg from "../../assets/svgs/hashnodeIcon.png";
import mediumIconLight from "../../assets/svgs/mediumLight.svg";
import mediumIconDark from "../../assets/svgs/mediumDark.svg";
import { connect } from "react-redux";
import cx from "classnames";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { theme } = this.props;
    const footerStyle = cx(s.container, {
      [s.containerLight]: theme === "Light",
    });
    return (
      <div className={footerStyle}>
        <div className={s.iconContainer}>
          <div className={s.icon}>
            <Tooltip
              content={"Connect with me over instagram"}
              direction={"right"}
            >
              <a
                href={"https://www.instagram.com/shvm_srma/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </Tooltip>
          </div>
          <div className={s.icon}>
            <Tooltip
              content={"Connect with me over facebook"}
              direction={"right"}
            >
              <a
                href={"https://www.facebook.com/shvmsrma/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookIcon} alt="Facebook" />
              </a>
            </Tooltip>
          </div>
          <div className={s.icon}>
            <Tooltip
              content={"Send me email at shvmsrma@gmail.com"}
              direction={"right"}
            >
              <a
                href={"https://www.gmail.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gmailIcon} alt="Gmail" />
              </a>
            </Tooltip>
          </div>
          <div className={s.icon}>
            <Tooltip content={"Follow me on twitter"} direction={"right"}>
              <a
                href={"https://twitter.com/Shvmsrma"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </Tooltip>
          </div>
          <div className={s.icon}>
            <Tooltip
              content={"Connect with me over LinkedIn"}
              direction={"right"}
            >
              <a
                href={"https://www.linkedin.com/in/shvmsrma/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </Tooltip>
          </div>
          <div className={s.icon}>
            <Tooltip content={"Follow me over Hashnode"} direction={"right"}>
              <a
                href={"https://hashnode.com/@shvmsrma"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={hashnodeImg} alt="LinkedIn" />
              </a>
            </Tooltip>
          </div>
          <div className={s.icon}>
            <Tooltip content={"Follow me over Medium"} direction={"right"}>
              <a
                href={"https://medium.com/@shvmsrma"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={theme === "Light" ? mediumIconLight : mediumIconDark}
                  alt="LinkedIn"
                />
              </a>
            </Tooltip>
          </div>
        </div>
        <div className={s.copyright}>&copy; Shivam Sharma</div>
      </div>
    );
  }
}

export default connect((state) => state, null)(Footer);
