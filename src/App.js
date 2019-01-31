import React, { Component } from 'react';
import './styles/App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import TopNav from './components/TopNav';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div id='master-container'>
        <div className="container">
          <div className="row">
            <TopNav/>
            <Main/>
          </div>
          <div className="row no-gutter">
            <About/>
          </div>
          <Skills/>
          <Portfolio/>
          <Contact/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
