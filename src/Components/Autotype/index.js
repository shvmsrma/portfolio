import React, { Component } from "react";
class Autotype extends Component {
  constructor(props) {
    super(props);
    this.state = { textRender: "", length: 0 };
  }
  autoWrite() {
    console.log("Hi");
    const { textToDisplay } = this.props;
    const { length, textRender } = this.state;
    let clonedText = textToDisplay;
    let textRenderClone = textRender;
    if (textRenderClone.length !== textToDisplay.length) {
      this.setState({
        textRender: textRenderClone + clonedText[length],
        length: length + 1,
      });
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => this.autoWrite(), 80);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { textRender } = this.state;
    console.log(textRender);

    return <p>{textRender}</p>;
  }
}

export default Autotype;
