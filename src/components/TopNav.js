import React, { Component } from 'react';

class TopNav extends Component {
  render() {
    return (
      <div id='top-nav' className='initialFadeIn fadeIn col-sm-12'>
        <ul className='navbar'>
          <li className='navItem'><a href="#main">Home</a></li>
          <li className='navItem'><a href="#about">About</a></li>
          <li className='navItem'><a href="#skills">skills</a></li>
          <li className='navItem'><a href="#portfolio">portfolio</a></li>
          <li className='navItem'><a href="#contact">contact</a></li>
        </ul>
      </div>
    );
  }
}

export default TopNav;