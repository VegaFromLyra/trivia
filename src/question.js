import React, { Component } from "react";

class Question extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      question: "",
      allAnswers: [],
      actualAnswer: "",
      expectedAnswer: ""
    };
  }

  onSubmit = (e) => {
    if (this.state.actualAnswer === this.state.expectedAnswer) {
      console.log("yayyy")
    } else {
      console.log("booo")
    }
  }

  onChangeAnswer = (e) => {
    this.setState({ actualAnswer: e.target.value })
  }

  componentWillMount() {
    fetch(process.env.REACT_APP_TRIVIA_API).then(response => {
      return response.json();
    }).then(data => {
      var first_qna_set = data.results[0];
      var question = first_qna_set.question;
      var allAnswers = [first_qna_set.correct_answer].concat(first_qna_set.incorrect_answers);
      this.setState({
        question: question,
        expectedAnswer: first_qna_set.correct_answer,
        allAnswers: allAnswers
      });
    });
  }

  render() {
    return (
      <div className="QuestionContainer">
        <form className="QuestionForm" onSubmit={this.onSubmit}>
          <label>
            { this.state.question }
           </label>
           <div className="Answer">
             {
               this.state.allAnswers.map((answer, index) =>
                 <div>
                   <input name="choices" type="radio" value={answer} onChange={this.onChangeAnswer} /> {answer}
                 </div>
               )
             }
           </div>
           <div className="SubmitContainer">
             <input type="submit" value="Submit" />
           </div>
        </form>
      </div>
    );
  }
}

export { Question };
