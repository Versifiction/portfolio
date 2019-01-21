import React, { Component } from 'react';
import './Apropos.css';

import Top from '../../Molecules/Top';
import Bandeau from '../../Molecules/Bandeau';
import Resume from '../../Molecules/Resume';
import Competences from '../../Molecules/Competences';
import Navigation from '../../Molecules/Navigation';
import Autres from '../../Molecules/Autres';
import Footer from '../../Molecules/Footer';
import aproposHead from '../../../images/apropos-head.jpg';

class Apropos extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="a-propos">
        <Top />
        <Navigation />
        <Bandeau page="À propos" backgroundImage={ aproposHead } />
        <Resume />
        <Competences />
        <Autres />
        <Footer />
      </div>
    );
  }
}

export default Apropos;