import React, { Component } from 'react';
import Donut from './Donut';
import { donut95 } from '../data/donut95';
import { donut90 } from '../data/donut90';

class Skills extends Component {
  render() {
    return (
      <div className='col-sm-12'>
        <section id="skills" className='page-content'>
          <div className="section-header">
            <h1>Skills</h1>
          </div>
          <div id='donuts' className="row donut-case">
            <Donut
              data={donut95}
              percent={'95%'}
              title={'HTML5/CSS3'}
            />
            <Donut
              data={donut90}
              percent={'90%'}
              title={'React'}
            />
            <Donut
              data={donut90}
              percent={'90%'}
              title={'JavaScript'}
            />
            <Donut
              data={donut90}
              percent={'90%'}
              title={'JavaScript'}
            />
            <Donut
              data={donut90}
              percent={'90%'}
              title={'JavaScript'}
            />
            <Donut
              data={donut90}
              percent={'90%'}
              title={'JavaScript'}
            />
            <Donut
              data={donut90}
              percent={'90%'}
              title={'JavaScript'}
            />
            <Donut
              data={donut90}
              percent={'90%'}
              title={'JavaScript'}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Skills;