import React, { Component } from 'react';
import './Projets.css';

import Top from '../../Molecules/Top';
import Bandeau from '../../Molecules/Bandeau';
import Navigation from '../../Molecules/Navigation';
import Realisations from '../../Molecules/Realisations';
import Footer from '../../Molecules/Footer';
import projetsHead from '../../../images/projets-head.jpg';

class Projets extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="projets">
        <Top />
        <Navigation />
        <Bandeau page="Projets" backgroundImage={ projetsHead } />
        <Realisations />
        <Footer />
      </div>
    );
  }
}

export default Projets;