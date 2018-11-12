import React, { Component } from 'react';
import './Contact.css';

import Bandeau from '../../Bandeau';
import Navigation from '../../Navigation';
import ContactPage from '../../ContactPage';
import Map from '../../Map';
import Footer from '../../Footer';
import contactHead from '../../../images/contact-head.jpg';

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="contact">
        <Navigation />
        <Bandeau page="Contact" backgroundImage={ contactHead } />
        <ContactPage />
        <Map />
        <Footer />
      </div>
    );
  }
}

export default Contact;