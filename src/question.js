import React, { Component } from "react";

class Question extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      trivia: {},
      submittedAnswer: ""
    };
  }

  onSubmit = (e) => {
    if (this.state.submittedAnswer === this.state.trivia.correct_answer) {
      console.log("yayyy")
    } else {
      console.log("booo")
    }
  }

  onChangeAnswer = (e) => {
    this.setState({ submittedAnswer: e.target.value })
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
        <form className="QuestionForm" onSubmit={this.onSubmit}>
          <label>
             { this.state.trivia.question }
            <div className="Answer">
              <input type="text" name="answer" onChange={this.onChangeAnswer}/>
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
