import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GreetingHeader from '../GreetingHeader/GreetingHeader';
import data from '../../sample-data.json';
import TestHeader from '../TestHeader/TestHeader';
import TestCaseList from '../TestCaseList/TestCaseList';
import TestStepBoard from '../TestStepBoard/TestStepBoard';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      appName: data.app_name,
      testCases: data.test_cases,
      runId: data.test_run_id,
      timeRan: data.time_stamp,
      selectedTestCase: data.test_cases[0]
    }
  }

  selectTest = (test) => {
    this.setState({
      selectedTestCase: test
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button className="Button-account">Account</button>
        </header>
        <GreetingHeader appName={this.state.appName} />
        <TestHeader
          runId={this.state.runId}
          time={this.state.timeRan}
          testCases={this.state.testCases}/>
        <div className="Test-content">
          <TestCaseList testCases={this.state.testCases} selectTestHandler={this.selectTest}/>
          <TestStepBoard testCase={this.state.selectedTestCase}/>
        </div>
      </div>
    );
  }
}

export default App;
