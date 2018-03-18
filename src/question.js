import React, { Component } from 'react';

class Question extends React.Component {
  render() {
    return (
      <form>
        <label>
          What is the largest organ of the human body?
          <input type="text" value="" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Question;
