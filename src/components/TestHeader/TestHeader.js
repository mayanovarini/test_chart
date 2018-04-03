import React, { Component } from 'react';
import './TestHeader.css';
import leftArrow from './leftArrow.svg';
import check from './check.svg';
import cross from './cross.svg';

class TestHeader extends Component {
  constructor(props){
    super(props);
  }

  static getDerivedStateFromProps(props, state){
    const passed = props.testCases.filter(test => test.status).length;

    return {
      totalTest: props.testCases.length,
      totalPassed: passed,
      totalFailed: props.testCases.length - passed
    }
  }

  render() {
    return (
      <div className="Test-header">
        <div className="Header-top">
          <img src={leftArrow} className="Arrow" alt="arrow" />
          <h1 className="Run-id">#{this.props.runId}</h1>
          <p className="Total-test"><span>{this.state.totalTest}</span>Test Cases</p>
          <div className="Count-passed">
            <img src={check} className="Check"/>
            <p>{this.state.totalPassed}</p>
          </div>
          <div className="Count-failed">
            <img src={cross} className="cross"/>
            <p>{this.state.totalFailed}</p>
          </div>
        </div>
        <p className="Time">{this.props.time}</p>
      </div>
    );
  }
}

export default TestHeader;
