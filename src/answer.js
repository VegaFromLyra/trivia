import React, { Component } from "react";

class Answer extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    if (this.props.answerState === "correct") {
      return (
        <div className="Answer">
          That's right!
        </div>
      );
    } else if (this.props.answerState === "incorrect") {
      return (
        <div className="Answer">
          Try Again!
        </div>
      );
    } else {
      return (
        <div className="Answer">
        </div>
      );
    }
  }
}

export { Answer };
