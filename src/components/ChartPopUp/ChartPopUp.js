import React, { Component } from 'react';
import './ChartPopUp.css';
import ChartCard from '../ChartCard/ChartCard';

class ChartPopUp extends Component {

  render() {
    if (!this.props.times || !this.props.cpu || !this.props.memory) {
      return ''
    }
    return (
      <div className="Popup-container">
        <h1 className="Header">Performance Data of <span>{this.props.name}</span></h1>
        <div className="ChartPopUp">
          { this.props.times.map((v, i) => [v, this.props.memory[i], this.props.cpu[i]]).map(data => {
            return <ChartCard runData={data} />
          }) }
        </div>
      </div>

    )

  }
}

export default ChartPopUp;
