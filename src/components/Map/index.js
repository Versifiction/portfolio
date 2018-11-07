import React, { Component } from 'react';
import './Map.css';

class Map extends Component {
  render() {
    return (
      <div className="map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.303560400908!2d2.3681649156734967!3d48.83334817928504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67221814d9685%3A0x8f9f634f83433bf3!2s11+Rue+Louise+Weiss%2C+75013+Paris!5e0!3m2!1sfr!2sfr!4v1540822643856" 
          frameBorder="0" 
          style={{border: 0}}
          title="Map adresse" 
          allowFullScreen>
        </iframe>
      </div>
    );
  }
}

export default Map;