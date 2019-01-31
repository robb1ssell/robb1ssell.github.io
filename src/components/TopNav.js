import React, { Component } from 'react';

class TopNav extends Component {
  render() {
    return (
      <div id='top-nav' className='initialFadeIn fadeIn col-sm-12'>
        <div className="navItem"><a href='#main'>HOME</a></div>
        <div className="navItem"><a href='#about'>ABOUT</a></div>
        <div className="navItem"><a href='#skills'>SKILLS</a></div>
        <div className="navItem"><a href='#portfolio'>PORTFOLIO</a></div>
        <div className="navItem"><a href='#contact'>CONTACT</a></div>
      </div>
    );
  }
}

export default TopNav;