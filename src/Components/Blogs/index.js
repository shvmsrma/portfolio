import React, { Component } from "react";
import * as s from "./blogs.module.scss";
import cx from "classnames";
import { connect } from "react-redux";
import { blogLists } from "../../utils/blogconfig";
import twitterSmallDark from "../../assets/svgs/twittersmall.svg";
import twitterSmallLight from "../../assets/svgs/twitter.svg";
import githubSmall from "../../assets/svgs/githubsmall.svg";
import githubSmallDark from "../../assets/svgs/githubDark.svg";
import { Slide } from "react-awesome-reveal";
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
          <Slide>
            <div className={s.blog}>
              <a href={blog.url} target="_blank" rel="noopener noreferrer">
                <div className={s.title}>{blog.title}</div>
                <div className={s.socialButtonreadTime}>
                  <div className={s.socialButton}>
                    <img
                      src={theme === "Light" ? githubSmall : githubSmallDark}
                      alt={"github"}
                    />
                    <img
                      src={
                        theme === "Light" ? twitterSmallLight : twitterSmallDark
                      }
                      alt={"twitter"}
                    />
                  </div>
                  <div className={s.readTime}>{blog.readTime} min read</div>
                </div>
                <div className={s.description}>{blog.description}</div>
                <hr />
              </a>
            </div>
          </Slide>
        );
      });
      return blogListrender;
    };

    return (
      <div className={blogStyle}>
        <div className={s.mainContainer}>{blogList()}</div>
      </div>
    );
  }
}

export default connect((state) => state, null)(Blogs);
