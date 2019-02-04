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

  //Monitors user input and updates respective state as user types
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

  //Run when contact form button is clicked
  //Uses EmailValidator package to check email and checks min message length before allowing send
  //sendMessage is called and state is updated when form is submitted
  handleSubmit = (e) => {
    e.preventDefault();

    if(EmailValidator.validate(this.state.email) && this.state.message.length >= 50) {
      this.setState({
        formValid: true
      });

      let status = document.getElementById('status');
      status.innerHTML = '';
      
      
      this.sendMessage();
        
        this.setState({
          formSubmitted: true
        });
    }
    else {
      let status = document.getElementById('status');
      status.innerHTML = 'Invalid E-Mail or Message Length';
    }
  }

  //Called when form is allowed to be submitted
  //Uses Email JS sendForm method with a promise that updates state if form was sent
  //https://www.emailjs.com/docs/sdk/sendform/
  //Shows user confirmation message if sent successfully
  sendMessage = () => {
    window.emailjs.sendForm('gmail', 'template_DxdlZhiu', '#contact-form')
    .then(res => {
      this.setState({
        formMessageSent: true
      });
    })
    .catch(err => console.error('Failed to send message. Error: ', err));

    if (this.state.formMessageSent === true) {
      let status = document.getElementById('status');
      status.innerHTML = 'Message Sent Successfully';
    } 
  }

  render() {
    return (
      <div id='contact-form-container'>
        <form id='contact-form' onSubmit={(e) => this.handleSubmit(e)}>
          <input 
            type="text" 
            placeholder='Name' 
            name='contact_name'
            required 
            onChange={(e) => this.handleNameChange(e)}
            value={this.state.name}
          />
          <input 
            type="text" 
            placeholder='E-Mail' 
            name='contact_email'
            required 
            onChange={(e) => this.handleEmailChange(e)}
            value={this.state.email}
          />
          <input 
            type="text" 
            placeholder='Subject' 
            name='contact_subject'
            required 
            onChange={(e) => this.handleSubjectChange(e)}
            value={this.state.subject}
          />
          <textarea 
            name="contact_message" 
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
          <p className='caption'><em>Min: 50 Max: 1000</em></p>
          <div className="form-buttons">
            <input 
              type="submit"
              value='Submit'
              className='btn submit-button'
            />
          </div>
          <p id="status"></p>
        </form>
      </div>
    );
  }
}

export default ContactForm;