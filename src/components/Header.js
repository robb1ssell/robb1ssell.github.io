import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div id='header' className='initialFadeIn fadeIn'>
        <img id='headpic' src="https://media.licdn.com/dms/image/C4E03AQHqVMEDXDkBoQ/profile-displayphoto-shrink_200_200/0?e=1554336000&v=beta&t=eIM9QwZCArfF5CDTD-t0UzNMrWmZRb7m0NFnTwOgk_0" 
          className='center-img' alt="Rob Headshot"/>
        <h1>Robert Bissell</h1>
        <div id='tagline' className="border-box">
          <h2>Front-End Developer <span className="bar">|</span> UI/UX Designer</h2>
          <h2>Sports Buff <span className="bar">|</span> Gaming Nerd</h2>
        </div>
      </div>
    );
  }
}

export default Header;