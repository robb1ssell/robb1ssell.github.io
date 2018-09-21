import React, { Component } from 'react';
import Typer from './Typer';


class Main extends Component {

  
  render() {
    return (
      <div id='main'>
        <h2>FRONT END</h2>
        <h1>WEB DEVELOPER</h1>
        <hr className='divider'/>
        <Typer
          strings={['<h2>FRONT END</h2>', '<h1>WEB DEVELOPER</h1>']}
        />
      </div>
    );
  }
}

export default Main;