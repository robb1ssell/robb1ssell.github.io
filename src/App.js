import React, { Component } from 'react';
import './styles/App.css';
import './styles/burger-menu.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

import { scaleRotate as Menu } from 'react-burger-menu';

class App extends Component {

  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id='master-container'>
          <div id="outer-container">
            <Menu pageWrapId={ "page-wrap-test" } outerContainerId={ "outer-container" }>
              <a id="home" className="menu-item" href="/">Home</a>
              <a id="about" className="menu-item" href="/about">About</a>
              <a id="contact" className="menu-item" href="/contact">Contact</a>
              <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
            <div id="page-wrap-test">
              <Header/>
              <Home/>
            </div>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
