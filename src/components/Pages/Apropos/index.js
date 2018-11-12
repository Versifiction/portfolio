import React, { Component } from 'react';
import './Apropos.css';

import Bandeau from '../../Bandeau';
import Resume from '../../Resume';
import Competences from '../../Competences';
import Navigation from '../../Navigation';
import Autres from '../../Autres';
import Footer from '../../Footer';
import aproposHead from '../../../images/apropos-head.jpg';

class Apropos extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="a-propos">
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