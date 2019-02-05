import React, { Component } from 'react';
import Donut from './Donut';
import { donutHtml } from '../data/donutHtml';
import { donutJS } from '../data/donutJS';
import { donutReact } from '../data/donutReact';
import { donutAngular } from '../data/donutAngular';
import QuoteSlider from './QuoteSlider';
import { donutGit } from '../data/donutGit';
import { donutSQL } from '../data/donutSQL';
import { donutJquery } from '../data/donutJquery';
import { donutPython } from '../data/donutPython';

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
              data={donutHtml}
              percent={'95%'}
              title={'HTML5/CSS3'}
            />
            <Donut
              data={donutJS}
              percent={'90%'}
              title={'JavaScript'}
            />
            <Donut
              data={donutReact}
              percent={'80%'}
              title={'React'}
            />
            <Donut
              data={donutAngular}
              percent={'50%'}
              title={'Angular/Ember'}
            />
            <Donut
              data={donutJquery}
              percent={'80%'}
              title={'jQuery'}
            />
            <Donut
              data={donutGit}
              percent={'95%'}
              title={'Git'}
            />
            <Donut
              data={donutSQL}
              percent={'90%'}
              title={'SQL'}
            />
            <Donut
              data={donutPython}
              percent={'50%'}
              title={'Python'}
            />
          </div>
        </section>
          <QuoteSlider/>
      </div>
    );
  }
}

export default Skills;