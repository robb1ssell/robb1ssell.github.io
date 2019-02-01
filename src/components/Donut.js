import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class Donut extends Component {
  render() {
    return (
      <div className="col-xs-6 donut-box">
        <div className="donut">
          <Doughnut 
            data={this.props.data}
            width={100}
            height={100}
            options={{maintainAspectRatio: false}}
          />
          <div className="skill-percent">{this.props.percent}</div>
        </div>
        <h5 className="donut-title">{this.props.title}</h5>
      </div>
    );
  }
}

export default Donut;