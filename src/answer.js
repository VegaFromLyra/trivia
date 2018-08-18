import React, { Component } from "react";

class Answer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isCorrect: false
    };
  }

  render() {
    return (
      <div className="Answer">
        That's right!
      </div>
    );
  }
}

export { Answer };
