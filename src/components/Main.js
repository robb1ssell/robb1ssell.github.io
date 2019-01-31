import React, { Component } from 'react';
import IntroTextEvent from './IntroTextEvent';
import Header from './Header';


class Main extends Component {
  render() {
    return (
      <div className='col-sm-12'>
        <section id='main'>
          <IntroTextEvent/>
          <Header/>
        </section>
      </div>
    );
  }
}

export default Main;