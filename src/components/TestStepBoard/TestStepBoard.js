import React, { Component } from 'react';
import './TestStepBoard.css';
import TestStepCollection from '../TestStepCollection/TestStepCollection';

class TestStepBoard extends Component {
  render() {
    return (
      <div className="Test-step-card">
        <TestStepCollection testSteps={this.props.testCase.test_steps} />
      </div>
    );
  }
}

export default TestStepBoard;
