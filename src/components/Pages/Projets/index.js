import React, { Component } from 'react';
import './Projets.css';

import Bandeau from '../../Bandeau';
import Navigation from '../../Navigation';
import Realisations from '../../Realisations';
import Footer from '../../Footer';
import projetsHead from '../../../images/projets-head.jpg';

class Projets extends Component {
  render() {
    return (
      <div className="projets">
          <Navigation />
          <Bandeau page="Projets" backgroundImage={ projetsHead } />
          <Realisations />
          <Footer />
      </div>
    );
  }
}

export default Projets;