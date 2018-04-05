import React, { Component } from 'react';
import './TestCaseList.css';
import TestCase from '../TestCase/TestCase';

class TestCaseList extends Component {


  render() {
    return (
      <div className="Test-case-list">
        {this.props.testCases.map(test =>
          <TestCase key={test.test_name + Date.now()} test={test} selectTestHandler={this.props.selectTestHandler}/>
        )}
      </div>
    );
  }
}

export default TestCaseList;
