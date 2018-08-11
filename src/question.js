import React, { Component } from "react";

class Question extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      question: "",
      all_answers: [],
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
      var first_qna_set = data.results[0];
      var question = first_qna_set.question;
      var all_answers = [first_qna_set.correct_answer].concat(first_qna_set.incorrect_answers);
      this.setState({
        question: question,
        all_answers: all_answers
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
               this.state.all_answers.map((answer, index) =>
                 <label>
                   <input type="radio" key={index} value={answer} /> {answer}
                 </label>
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
