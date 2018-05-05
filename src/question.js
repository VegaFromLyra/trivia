import React, { Component } from "react";

class Question extends React.Component {
  constructor () {
    super();
    this.state = {
      trivia: {},
    };
  }

  componentWillMount() {
    fetch(process.env.REACT_APP_TRIVIA_API).then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        trivia: data.results[0]
      });
    });
  }

  render() {
    return (
      <div className="QuestionContainer">
        <form className="QuestionForm">
          <label>
             { this.state.trivia.question }
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
