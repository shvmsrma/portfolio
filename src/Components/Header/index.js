import React, { Component } from "react";
import * as s from "./header.module.scss";
import { Link } from "@reach/router";
import cx from "classnames";
import { connect } from "react-redux";
import { setSelectedPage } from "../../Actions/index";
import lightThemeIcon from "../../assets/svgs/moonIconLight.svg";
import darkThemeIcon from "../../assets/svgs/moonIcon.svg";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "Dark",
    };
    this.onSelectPage = this.onSelectPage.bind(this);
  }
  onSelectPage(name) {
    const { setSelectedPage } = this.props;
    setSelectedPage(name);
  }
  onToggleTheme(type) {
    this.setState({ theme: type });
  }
  render() {
    const { selectedpage } = this.props;
    const { theme } = this.state;
    return (
      <div className={s.container}>
        <div className={s.image}>SHIVAM SHARMA</div>
        <div className={s.links}>
          <Link
            to="/"
            className={selectedpage === "app" ? s.selectedLink : s.link}
            onClick={() => this.onSelectPage("app")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={selectedpage === "about" ? s.selectedLink : s.link}
            onClick={() => this.onSelectPage("about")}
          >
            About
          </Link>
          <Link
            to="/blogs"
            className={selectedpage === "blogs" ? s.selectedLink : s.link}
            onClick={() => this.onSelectPage("blogs")}
          >
            Blogs
          </Link>
          <div className={s.themeSwitch}>
            <img
              onClick={() =>
                theme === "Dark"
                  ? this.onToggleTheme("Light")
                  : this.onToggleTheme("Dark")
              }
              src={theme === "Dark" ? lightThemeIcon : darkThemeIcon}
              alt={theme + "Theme"}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapActionToProps = {
  setSelectedPage,
};
export default connect((state) => state, mapActionToProps)(Header);
