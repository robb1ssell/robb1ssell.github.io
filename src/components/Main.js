import React, { Component } from 'react';
import IntroTextEvent from './IntroTextEvent';
import Home from './Home';


class Main extends Component {
  componentDidMount = () => {
    setTimeout(function(){
      let skipButton = document.getElementById('skip-intro');
      let intro = document.getElementById('intro-text');
      if(skipButton){
        skipButton.remove();
        intro.remove();
      }
    }, 15500);
  }

  skipIntro = () => {
    let skipButton = document.getElementById('skip-intro');
    skipButton.remove();

    let intro = document.getElementById('intro-text');
    intro.remove();

    let nav = document.getElementById('top-nav');
    nav.classList.remove('initialFadeIn', 'fadeIn');

    let home = document.getElementById('home');
    home.classList.remove('initialFadeIn', 'fadeIn');
  }

  render() {
    return (
      <div className='col-sm-12'>
        <section id='main'>
          <IntroTextEvent/>
          <Home/>
          <div id="skip-intro">
            <button id='skipButton' onClick={this.skipIntro}>Skip Intro</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;