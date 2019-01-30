import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div id='header' className='initialFadeIn fadeIn'>
        <img id='headpic' src="https://media.licdn.com/dms/image/C4E03AQHqVMEDXDkBoQ/profile-displayphoto-shrink_200_200/0?e=1554336000&v=beta&t=eIM9QwZCArfF5CDTD-t0UzNMrWmZRb7m0NFnTwOgk_0" 
          className='center-img' alt="Rob Headshot"/>
        <h2>Robert Bissell</h2>
        <h1>Front-End Developer | UI/UX Designer</h1>
        <h1>Sports Buff | Gaming Nerd</h1>
      </div>
    );
  }
}

export default Header;