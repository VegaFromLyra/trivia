import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Question } from './question';
import { Answer } from './answer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Question />
        <Answer />
      </div>
    );
  }
}

export default App;
