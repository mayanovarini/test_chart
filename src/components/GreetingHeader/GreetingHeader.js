import React, { Component } from 'react';
import './GreetingHeader.css'; 

class GreetingHeader extends Component {
  render() {
    return (
      <div className="Greeting-header">
        <h1>Welcome to the dashboard of {this.props.appName}!</h1>
        <button className="Button-Header">Change Project</button>
      </div>
    );
  }
}

export default GreetingHeader;
