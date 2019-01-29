import React, { Component } from 'react';
import IntroTextEvent from './IntroTextEvent';
import Header from './Header';
import About from './About';


class Main extends Component {
  render() {
    return (
      <div>
        <section id='main'>
          <IntroTextEvent/>
          <Header/>
        </section>

        <About/>
      </div>
    );
  }
}

export default Main;