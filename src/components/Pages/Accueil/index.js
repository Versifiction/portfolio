import React, { Component } from 'react';
import './Accueil.css';

import Navigation from '../../Navigation';
import HeaderImg from '../../HeaderImg';
import Conception from '../../Conception';
import Collaboration from '../../Collaboration';
import Map from '../../Map';
import Footer from '../../Footer';

class Accueil extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="accueil">
        <Navigation />
        <HeaderImg />
        <Conception />
        <Collaboration />
        <Map />
        <Footer />
      </div>
    );
  }
}

export default Accueil;

