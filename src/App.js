import React, { Component } from 'react';
import './styles/App.css';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <div id='master-container'>
        <div className="container">
          <div id="page-wrap">
            <Main/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
