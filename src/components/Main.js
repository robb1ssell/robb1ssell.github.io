import React, { Component } from 'react';
import IntroTextEvent from './IntroTextEvent';
import Header from './Header';
import About from './About';
import Footer from './Footer';


class Main extends Component {

  
  render() {
    return (
      <div>
        <div id='main'>
          <IntroTextEvent/>
          <Header/>
        </div>

        <About/>
      </div>
    );
  }
}

export default Main;