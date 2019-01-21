import React, { Component } from 'react';

import './MentionsLegales.css';

import Top from '../../Molecules/Top';
import Bandeau from '../../Molecules/Bandeau';
import Navigation from '../../Molecules/Navigation';
import Mentions from '../../Molecules/Mentions';
import Footer from '../../Molecules/Footer';
import mentionsLegalesHead from '../../../images/mentionslegales-head.jpg';

class MentionsLegales extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="mentions-legales">
        <Top />
        <Navigation />
        <Bandeau page="Mentions légales" backgroundImage={ mentionsLegalesHead } />
        <Mentions />
        <Footer />
      </div>
    );
  }
}

export default MentionsLegales;