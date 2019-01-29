import React, { Component } from 'react';
import IntroTextEvent from './IntroTextEvent';
import Header from './Header';
import About from './About';


class Main extends Component {
  constructor(){
    super()
    this.state = {renderIntro: true};
    this.handleIntroUnmount = this.handleIntroUnmount.bind(this);
  }

  handleIntroUnmount(){
    this.setState({renderIntro: false});
  }
  
  render() {
    return (
      <div>
        <div id='main'>
          {this.state.renderIntro ? <IntroTextEvent unmountMe={this.handleIntroUnmount} /> : null}
          <Header/>
        </div>

        <About/>
      </div>
    );
  }
}

export default Main;