import React, { Component } from 'react';
import './ChartPopUp.css';
import $ from 'jquery';
import ChartCard from '../ChartCard/ChartCard';

class ChartPopUp extends Component {
  render() {
    console.log("popup is ", this.props.popup);

    if (!this.props.popup.launch_times) {
      return ''
    }

    const charts = this.props.popup.launch_times.map(time => ({
      launch_time: time
    }))

    this.props.popup.memory.forEach((mem, idx) => {
      charts[idx].memory = mem
    })

    this.props.popup.cpu.forEach((c, idx) => {
      charts[idx].cpu = c
    })

    return (
      <div className="ChartPopup">
        {charts.map(chart =>
          <ChartCard time={chart.launch_time} mem={chart.memory} cpuUnit={chart.cpu} />)}
      </div>
    );
  }
}

export default ChartPopUp;
