import React, { Component } from 'react';

class TopNav extends Component {
  render() {
    return (
      <div id='top-nav' className='initialFadeIn fadeIn col-sm-12'>
        <div className="navItem"><a href='#home'>Home</a></div>
        <div className="navItem"><a href='#about'>About</a></div>
        <div className="navItem"><a href='#skills'>Skills</a></div>
        <div className="navItem"><a href='#portfolio'>Portfolio</a></div>
        <div className="navItem"><a href='#contact'>Contact</a></div>
      </div>
    );
  }
}

export default TopNav;