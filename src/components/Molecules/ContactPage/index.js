import React, { Component } from 'react';

import ContactText from '../ContactText';
import ContactForm from '../ContactForm';

import './ContactPage.css';

class ContactPage extends Component {
  render() {
    return (
      <div className="contact-page">
        <div className="container">
          <ContactText />
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default ContactPage;