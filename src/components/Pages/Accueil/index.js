import React, { Component } from 'react';
import './Accueil.css';

import Top from '../../Molecules/Top';
import Navigation from '../../Molecules/Navigation';
import HeaderImg from '../../Molecules/HeaderImg';
import Conception from '../../Molecules/Conception';
import Collaboration from '../../Molecules/Collaboration';
import Map from '../../Molecules/Map';
import Footer from '../../Molecules/Footer';

class Accueil extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="accueil">
        <Top />
        <HeaderImg />
        <Navigation />
        <Conception />
        <Collaboration />
        <Map />
        <Footer />
      </div>
    );
  }
}

export default Accueil;

