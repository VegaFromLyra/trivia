import React, { Component } from "react";

class Question extends React.Component {
  render() {
    return (
      <div className="QuestionContainer">
        <form className="QuestionForm">
          <label>
            What is the largest organ of the human body?
            <div className="Answer">
              <input type="text" name="answer"/>
            </div>
          </label>
          <div className="SubmitContainer">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export { Question };
