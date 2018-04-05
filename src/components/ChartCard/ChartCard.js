import React, { Component } from 'react';
import './ChartCard.css';
import {Bar} from 'react-chartjs-2';

class ChartCard extends Component {
  constructor(props){
    super(props);
  }

  static getDerivedStateFromProps(props, state) {
    const time = props.runData[0];
    const memory = props.runData[1] / 100;
    const cpu = props.runData[2];

    return {
      time: time,
      memory: memory,
      cpu: cpu,

      chartData: {
        labels: ['LAUNCH TIME', 'MEMORY', 'CPU'],
        datasets: [
          {
            label: 'Performance Data',
            data: [time, memory, cpu],
            borderColor: 'rgba(255, 255, 255, 0.2)',
            borderWidth: 0.5,
            backgroundColor: [
                '#C490D1',
                '#C7CB85',
                '#E7A977',
            ],
          }
        ]
      }
    }
  }

  render() {
    return (
      <div className="ChartCard-container">
        <div className="ChartCard" >
          <Bar
            data={this.state.chartData}
            options={{
              title: {
                display: true,
                fontSize: 15
              },
              legend: {
                display: false,
              },
              tooltips: {
                enabled: false
              },
              scales: {
                xAxes: [{
                  display: true,
                }],
                yAxes: [{
                  display: false,
                  ticks: {
                    beginAtZero: true,
                  },
                }]
              }
            }}
          />
        </div>
        <div class="axis">
          <div class="tick">
            <span class="test-unit">{this.state.time}ms</span>
          </div>
          <div class="tick">
            <span class="test-unit">{this.state.memory}MB</span>
          </div>
          <div class="tick">
            <span class="test-unit">{this.state.cpu}%</span>
          </div>
        </div>

      </div>

    )
  }
}

export default ChartCard;
