import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Question } from './question';
import { Answer } from './answer';

class App extends Component {
  constructor(props) {
    super(props);

    this.onAnswerChange = this.onAnswerChange.bind(this);
    this.state = {
      answerState: "initial"
    };
  }

  onAnswerChange(answerState) {
    this.setState({answerState: answerState});
  }

  render() {
    return (
      <div className="App">
        <Question onAnswerChange={this.onAnswerChange} />
        <Answer answerState={this.state.answerState} />
      </div>
    );
  }
}

export default App;
