import React, { Component } from 'react';
import * as EmailValidator from 'email-validator';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      formValid: false,
      formSubmitted: false,
      formMessageSent: false
    };
    
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  static sender = 'robertb.webdev@gmail.com';

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  handleSubjectChange = (e) => {
    this.setState({
      subject: e.target.value
    });
  }

  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if(EmailValidator.validate(this.state.email) && this.state.message.length >= 50) {
      this.setState({
        formValid: true
      });

      let errors = document.getElementById('errors');
      errors.innerHTML = '';
      
      
      this.sendMessage();
        
        this.setState({
          formSubmitted: true
        });
    }
    else {
      let errors = document.getElementById('errors');
      errors.innerHTML = 'Invalid E-Mail or Message Length';
    }
  }

  sendMessage = () => {
    window.emailjs.sendForm('gmail', 'template_DxdlZhiu', '#contact-form')
    .then(res => {
      console.log("send success", res.status, res.text);
      this.setState({
        formMessageSent: true
      });
    })
    .catch(err => console.error('Failed to send message. Error: ', err));
  }

  render() {
    return (
      <div id='contact-form-container'>
        <form id='contact-form' onSubmit={(e) => this.handleSubmit(e)}>
          <input 
            type="text" 
            placeholder='Name' 
            required 
            onChange={(e) => this.handleNameChange(e)}
            value={this.state.name}
          />
          <input 
            type="text" 
            placeholder='E-Mail' 
            required 
            onChange={(e) => this.handleEmailChange(e)}
            value={this.state.email}
          />
          <input 
            type="text" 
            placeholder='Subject' 
            required 
            onChange={(e) => this.handleSubjectChange(e)}
            value={this.state.subject}
          />
          <textarea 
            name="contact-message" 
            id="contact-message" 
            cols="30" 
            rows="10"
            required
            minLength='50'
            maxLength='1000'
            className='text-input'
            onChange={(e) => this.handleMessageChange(e)}
            placeholder='Message'
            value={this.state.message}
          />
          <p><em>Min: 50 Max: 1000</em></p>
          <p id="errors"></p>
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