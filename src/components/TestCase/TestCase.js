import React, { Component } from 'react';
import './TestCase.css';
import check from '../TestHeader/check.svg';
import cross from '../TestHeader/cross.svg';

class TestCase extends Component {

  select = () => {
    this.props.selectTestHandler(this.props.test)
  }

  render() {
    console.log("status from test case", this.props.test.status)
    return (
      <div className="Test-case" onClick={this.select}>
        {this.props.test.status ? <img src={check} className="Check"/> : <img src={cross} className="Cross"/> }
        {this.props.test.test_name}
      </div>
    );
  }
}

export default TestCase;
