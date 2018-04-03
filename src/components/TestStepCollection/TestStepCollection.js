import React, { Component } from 'react';
import './TestStepCollection.css';
import ChartPopUp from '../ChartPopUp/ChartPopUp';

class TestStepCollection extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: {
        launch_times: '',
        memory: '',
        cpu: ''
      }
    }
  }

  showChart = (time, memory, cpu) => {
    this.setState({
      data : {
        launch_times: time,
        memory: memory,
        cpu: cpu
      }
    })
  }

  render() {
    console.log("check data", this.state.data);
    return (
      <div className="Collection">
        {this.props.testSteps.map(step => {
          return (
            <div className="image-name">
              <div className="image-container">
                <img src={'/images/'+ step.screenshot}/>
              </div>
              <div className="StepList" onClick={(() => this.showChart(step.launch_times, step.memory, step.cpu))}>{step.step_name}</div>
              <ChartPopUp popup={this.state.data}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TestStepCollection;
