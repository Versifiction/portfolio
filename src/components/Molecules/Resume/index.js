import React, { Component } from 'react';

import moi from '../../../images/moi.png';
import cv from '../../../documents/cv.pdf';
import './Resume.css';


class Resume extends Component {
  componentDidMount() {
    var b = document.getElementById('blink');
    setInterval(function() {
        b.style.visibility = (b.style.visibility === 'visible' ? 'hidden' : 'visible');
    }, 1000);
  }

  render() {
    return (
      <div className="resume">
        <div className="container">
          <div className="content">
            <div className="resume-photo">
              <img src={ moi } alt="Marc Charpentier" />
            </div>
            <div className="resume-text">
              <p>Passionné depuis toujours par le web et la création graphique, j'ai suivi l'an dernier <span className="bold">une formation de 6 mois en Webdesign</span> ainsi qu'<span className="bold">un stage de la même durée</span>, durant lesquels je me suis perfectionné sur Photoshop, Illustrator, et l'intégration HTML/CSS.
                En février dernier, j'ai ensuite suivi <span className="bold">une formation de Développeur web de 5 mois</span> durant laquelle j'ai appris JavaScript, jQuery, React, PHP et MySQL.<br /><br/>
                La réalisation de projets personnels disponibles <a href="/projets" className="to-projets">ici</a> m'ont permis d'étendre la variété de mes
                réalisations, allant <span className="bold">de web applications aux sites web en passant par des newsletters</span>.<br /><br />
                <span id="blink">Je recherche à présent une entreprise pour un contrat de professionnalisation d'un an en tant que Développeur web Fullstack junior.</span>
              </p>
            </div>
            <div className="resume-cv">
            <a href={ cv } className="myButtonBlue">Voir mon CV</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
