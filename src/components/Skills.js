import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: [
    'Label'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
		  '#36A2EB',
		  '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

class Skills extends Component {
  render() {
    return (
      <div className='col-sm-12'>
        <section id="skills" className='page-content'>
          <div className="section-header">
            <h1>Skills</h1>
          </div>
          <div className="col-sm-6">
            <Doughnut data={data}/>
          </div>
        </section>
      </div>
    );
  }
}

export default Skills;