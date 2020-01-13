import React, { Component } from 'react';

import logo from '../../../images/MC-Short-Transparent.png';
import './HeaderImg.css';

class HeaderImg extends Component {
  render() {
    return (
      <div className="header-img">
        <div className="container">
          <div className="header-text">
            <img src={ logo } alt="Logo Marc Charpentier" className="header-logo wow bounceInDown" />
            <h1 className="header-title wow bounceInLeft">Marc Charpentier</h1>
            <h2 className="header-subtitle wow bounceInRight">Développeur web junior</h2>
          </div>
        </div>
        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderImg;