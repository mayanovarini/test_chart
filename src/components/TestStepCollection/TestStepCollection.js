import React, { Component } from 'react';
import './TestStepCollection.css';
import ChartPopUp from '../ChartPopUp/ChartPopUp';

class TestStepCollection extends Component {
  constructor(props){
    super(props);

    this.state = {
      times: [],
      memory: [],
      cpu: [],
      selectedStep: null
    }
  }

  showChart = (time, memory, cpu, name) => {
    console.log("time is", time, "memory is", memory, "cpu is", cpu);
    this.setState({
      times: time,
      memory: memory,
      cpu: cpu,
      selectedStep: true,
      stepName: name
    })
  }

  render() {
    return (
      <div>
        <div className="Collection">
          {this.props.testSteps.map((step, index) => {
            return (
              <div className="image-name">
                <div className="image-container">
                  <img src={'/images/'+ step.screenshot}/>
                </div>
                <div className="StepList" onClick={(() => this.showChart(step.launch_times, step.memory, step.cpu, step.step_name))}>{step.step_name}</div>
              </div>
            );
          })}
        </div>
        {this.state.selectedStep ?
          <ChartPopUp times={this.state.times} memory={this.state.memory} cpu={this.state.cpu} name={this.state.stepName}/>
        : ''
        }
      </div>
    );
  }
}

export default TestStepCollection;
