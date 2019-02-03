import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      formSubmitted: false,
      formMessageSent: false
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  static sender = 'robertb.webdev@gmail.com';

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template
    } = this.props.env;

    this.sendMessage(
      template,
      this.sender,
      receiverEmail,
      this.state.message
    );

    this.setState({
      formSubmitted: true
    });
  }

  sendMessage = (templateId, senderEmail, receiverEmail, message) => {
    window.emailjs.send('gmail', templateId, {
      senderEmail,
      receiverEmail,
      message
    })
    .then(res => {
      this.setState({
        formMessageSent: true
      });
    })
    .catch(err => console.error('Failed to send message. Error: ', err));
  }

  render() {
    return (
      <div id='contact-form-container'>
        <form id='contact-form' onSubmit={this.handleSubmit}>
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='E-Mail' />
          <input type="text" placeholder='Subject' />
          <textarea 
            name="contact-message" 
            id="contact-message" 
            cols="30" 
            rows="10"
            required
            className='text-input'
            onChange={this.handleChange}
            placeholder='Message'
            value={this.state.message}
          />

          <div className="form-buttons">
            <input 
              type="submit"
              value='Submit'
              className='btn submit-button'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;