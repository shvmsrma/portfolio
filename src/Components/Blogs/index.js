import React, { Component } from "react";
import * as s from "./blogs.module.scss";
import Header from "../Header";
import Footer from "../Footer";
import cx from "classnames";
import { connect } from "react-redux";
import { blogLists } from "../../utils/blogconfig";
class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { theme } = this.props;
    const blogStyle = cx(s.container, {
      [s.containerLight]: theme === "Light",
    });
    console.log(blogLists);

    const blogList = () => {
      const blogListrender = blogLists.map((blog, i) => {
        return (
          <div className={s.blog}>
            <a href={blog.url}>
              <div className={s.title}>{blog.title}</div>
              <div className={s.socialButtonreadTime}>
                <div className={s.socailButton}></div>
                <div className={s.readTime}>{blog.readTime} min read</div>
              </div>
              <div className={s.description}>{blog.description}</div>
            </a>
          </div>
        );
      });
      return blogListrender;
    };

    return (
      <div className={blogStyle}>
        <div className={s.headerContainer}>
          <Header />
        </div>
        <div className={s.mainContainer}>{blogList()}</div>
        <div className={s.footerContainer}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect((state) => state, null)(Blogs);
