import React, { Component } from 'react';
import './Contact.css';

import Top from '../../Molecules/Top';
import Bandeau from '../../Molecules/Bandeau';
import Navigation from '../../Molecules/Navigation';
import ContactPage from '../../Molecules/ContactPage';
import Map from '../../Molecules/Map';
import Footer from '../../Molecules/Footer';
import contactHead from '../../../images/contact-head.jpg';

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="contact">
        <Top />
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