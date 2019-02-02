import React, { Component } from 'react';
import './styles/App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import TopNav from './components/TopNav';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import NavBar, { ElementsWrapper } from 'react-scrolling-nav';
import { navBarTargets } from './data/navBarTargets';

class App extends Component {
  /*
  componentDidMount = () => {
    let nav = document.getElementById('top-nav');

    window.addEventListener('scroll', function (e) {
      e.preventDefault();

      if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
              nav.classList.add('nav-dark');
              nav.classList.remove('nav-transparent');
          } else {
              nav.classList.add('nav-transparent');
              nav.classList.remove('nav-dark');
          }
    });
  }
  */

  render() {
    return (
      <div id='master-container'>
        <div id="navbar" className="initialFadeIn fadeIn onTop">
          <NavBar 
            items={navBarTargets} 
            offset={-50}
            height={50}
            duration={500}
            delay={0}
            backgroundColor={'#1b1b1b'}
            linkClass={'nav-link'}
          />
        </div>
        <div className="container">
          <ElementsWrapper items={navBarTargets}>
            <div className="row" name='home'>
              {/*<TopNav/>*/}
              <Main/>
            </div>
            <div className="row no-gutter" name='about'>
              <About/>
            </div>
            <div className="row" name='skills'>
              <Skills/>
            </div>
            <div className="row no-gutter" name='portfolio'>
              <Portfolio/>
            </div>
            <div className="row" name='contact'>
              <Contact/>
            </div>
          </ElementsWrapper>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
