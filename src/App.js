import React, { Component } from 'react';
import './styles/App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import TopNav from './components/TopNav';

class App extends Component {
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

    let header = document.getElementById('header');
    header.classList.remove('initialFadeIn', 'fadeIn');
  }

  render() {
    return (
      <div id='master-container'>
        <div className="container">
          <div id="skip-intro">
            <button onClick={this.skipIntro}>Skip Intro</button>
          </div>
          <TopNav/>
          <Main/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
