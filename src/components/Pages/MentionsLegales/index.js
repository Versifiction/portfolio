import React, { Component } from 'react';

import './MentionsLegales.css';

import Bandeau from '../../Bandeau';
import Navigation from '../../Navigation';
import Mentions from '../../Mentions';
import Footer from '../../Footer';
import mentionsLegalesHead from '../../../images/mentionslegales-head.jpg';

class MentionsLegales extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="mentions-legales">
        <Navigation />
        <Bandeau page="Mentions légales" backgroundImage={ mentionsLegalesHead } />
        <Mentions />
        <Footer />
      </div>
    );
  }
}

export default MentionsLegales;