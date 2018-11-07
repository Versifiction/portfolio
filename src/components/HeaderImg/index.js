import React, { Component } from 'react';
import './HeaderImg.css';

class HeaderImg extends Component {
  render() {
    return (
      <div className="header-img">
        <div className="container">
          <h1 className="header-title">Marc Charpentier</h1>
          <br />
          <h2 className="header-subtitle">Développeur web junior</h2>
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