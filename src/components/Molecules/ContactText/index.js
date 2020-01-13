import React, { Component } from 'react';

import './ContactText.css';

class ContactText extends Component {
  render() {
    return (
      <div className="contact-text">
        <div className="content">
          <h3 className="wow fadeInDown">Me contacter</h3>
          <div className="separator not-centered"></div>
          <div className="contact-text-infos">
            <h4 className="wow fadeInDown">Adresse e-mail</h4>
            <p>marc_charpentier@hotmail.fr</p>
            <div className="hr-thin"></div>
            <h4 className="wow fadeInDown">Téléphone</h4>
            <p>06 75 47 23 94</p>
            <div className="hr-thin"></div>
            <h4 className="wow fadeInDown">Réseaux sociaux</h4>
            <div className="contact-text-icons">
              <a href="https://www.linkedin.com/in/charpentiermarc/">
                <i className="fab fa-linkedin fa-fw fa-3x"></i>
              </a>
              <a href="https://www.github.com/Versifiction">
                <i className="fab fa-github fa-fw fa-3x"></i>
              </a>
              <a href="https://www.twitter.com/MarkCharpent">
                <i className="fab fa-twitter fa-fw fa-3x"></i>
              </a>
            </div>
            <div className="hr-thin"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactText;