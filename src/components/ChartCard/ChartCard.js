import React, { Component } from 'react';
import './ChartCard.css';
import $ from 'jquery';

class ChartCard extends Component {
  render() {
    return (
      <div className="ChartCard">
        {this.props.time} {this.props.cpu} {this.props.mem}
      </div>
    );
  }
}

export default ChartCard;
