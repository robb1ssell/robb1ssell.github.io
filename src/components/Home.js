import React, { Component } from 'react';
import pdf from '../files/resume.pdf';

class Home extends Component {
  render() {
    return (
      <div id='home' className='initialFadeIn fadeIn'>
        <a href={pdf} download='Robert Bissell Resume'>
          <button id="download-cv-button">DOWNLOAD CV</button>
        </a>

        <img id='headpic' src="https://media.licdn.com/dms/image/C4E03AQHqVMEDXDkBoQ/profile-displayphoto-shrink_200_200/0?e=1554336000&v=beta&t=eIM9QwZCArfF5CDTD-t0UzNMrWmZRb7m0NFnTwOgk_0" 
          className='center-img' alt="Rob Headshot"/>
        <h1>Robert Bissell</h1>

        <div id='tagline' className="tag-border">
          <h2>Front-End Developer <span className="bar">|</span> UI/UX Designer</h2>
          <h2>Sports Buff <span className="bar">|</span> Gaming Nerd</h2>
        </div>

        <div id="top-socials">
          <a href="https://www.linkedin.com/in/robert-bissell-webdev/">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/robb1ssell">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <a href="mailto:robertb.webdev@gmail.com">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;