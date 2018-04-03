import React, { Component } from 'react';
import './TestCase.css';

class TestCase extends Component {

  select = () => {
    this.props.selectTestHandler(this.props.test)
  }

  render() {
    return (
      <div className="Test-case" onClick={this.select}>
        {this.props.test.test_name}
      </div>
    );
  }
}

export default TestCase;
