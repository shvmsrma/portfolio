import React, { Component } from "react";
import * as s from "./header.module.scss";
import { Link } from "@reach/router";
import cx from "classnames";
import { connect } from "react-redux";
import { setSelectedPage } from "../../Actions/index";
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
  render() {
    const { selectedpage } = this.props;

    return (
      <div className={s.container}>
        Header
        <Link
          to="/"
          className={selectedpage == "app" ? s.selectedLink : s.link}
          onClick={() => this.onSelectPage("app")}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={selectedpage == "about" ? s.selectedLink : s.link}
          onClick={() => this.onSelectPage("about")}
        >
          About
        </Link>
        <Link
          to="/blogs"
          className={selectedpage == "blogs" ? s.selectedLink : s.link}
          onClick={() => this.onSelectPage("blogs")}
        >
          Blogs
        </Link>
      </div>
    );
  }
}
const mapActionToProps = {
  setSelectedPage,
};
export default connect((state) => state, mapActionToProps)(Header);
