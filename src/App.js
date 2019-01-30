import React, { Component } from 'react';
import './styles/App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import TopNav from './components/TopNav';

class App extends Component {

  render() {
    return (
      <div id='master-container'>
        <div className="container">
          <TopNav/>
          <Main/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
