import React, { Component } from "react";
import * as s from "./header.module.scss";
import { Link } from "@reach/router";
import cx from "classnames";
import { connect } from "react-redux";
import { setSelectedPage, setTheme } from "../../Actions/index";
import lightThemeIcon from "../../assets/svgs/moonIconLight.svg";
import darkThemeIcon from "../../assets/svgs/moonIcon.svg";
import Tooltip from "../Tooltip/tooltip";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSelectPage = this.onSelectPage.bind(this);
  }
  onSelectPage(name) {
    const { setSelectedPage } = this.props;
    setSelectedPage(name);
  }
  onToggleTheme(type) {
    const { setTheme } = this.props;
    setTheme(type);
  }
  render() {
    const { selectedpage, theme } = this.props;
    const headerStyle = cx(s.container, {
      [s.containerLight]: theme === "Light",
    });
    console.log(theme);
    return (
      <div className={headerStyle}>
        <div className={s.image}>SHIVAM SHARMA</div>
        <div className={s.links}>
          <Tooltip content={"Go to home Page"} direction={"bottom"}>
            <Link
              to="/"
              className={selectedpage === "app" ? s.selectedLink : s.link}
              onClick={() => this.onSelectPage("app")}
            >
              Home
            </Link>
          </Tooltip>
          <Tooltip content={"Go to projects page"} direction={"bottom"}>
            <Link
              to="/projects"
              className={selectedpage === "projects" ? s.selectedLink : s.link}
              onClick={() => this.onSelectPage("projects")}
            >
              Projects
            </Link>
          </Tooltip>
          <Tooltip content={"Go to Blogs"} direction={"bottom"}>
            <Link
              to="/blogs"
              className={selectedpage === "blogs" ? s.selectedLink : s.link}
              onClick={() => this.onSelectPage("blogs")}
            >
              Blogs
            </Link>
          </Tooltip>
          <div className={s.themeSwitch}>
            <Tooltip
              content={
                theme === "Dark"
                  ? "Switch to Light theme"
                  : "Switch to Dark Theme"
              }
              direction={"bottom"}
            >
              <img
                onClick={() =>
                  theme === "Dark"
                    ? this.onToggleTheme("Light")
                    : this.onToggleTheme("Dark")
                }
                src={theme === "Dark" ? lightThemeIcon : darkThemeIcon}
                alt={theme + "Theme"}
              />
            </Tooltip>
          </div>
        </div>
      </div>
    );
  }
}
const mapActionToProps = {
  setSelectedPage,
  setTheme,
};
export default connect((state) => state, mapActionToProps)(Header);
