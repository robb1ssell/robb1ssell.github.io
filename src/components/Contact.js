import React, { Component } from 'react';
import ContactForm from './ContactForm';

class Contact extends Component {
  render() {
    return (
      <div className='col-sm-12'>
        <section id="contact" className='page-content'>
          <div className="section-header">
            <h1>Contact</h1>
          </div>
          <ContactForm env={this.props.env} />
        </section>
      </div>
    );
  }
}

export default Contact;