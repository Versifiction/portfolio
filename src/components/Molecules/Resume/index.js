import React, { Component } from "react";

import moi from "../../../images/moi.png";
import cv from "../../../documents/cv.pdf";
import "./Resume.css";

class Resume extends Component {
  // componentDidMount() {
  //   var b = document.getElementById('blink');
  //   setInterval(function() {
  //       b.style.visibility = (b.style.visibility === 'visible' ? 'hidden' : 'visible');
  //   }, 1000);
  // }

  render() {
    return (
      <div className="resume">
        <div className="container">
          <div className="content">
            <div className="resume-photo">
              <img src={moi} alt="Marc Charpentier" />
            </div>
            <div className="resume-text">
              <p>
                Passionné depuis toujours par le web et la création graphique,
                j'ai suivi l'an dernier
                <span className="bold">
                  une formation de 6 mois en Webdesign
                </span>
                ainsi qu'<span className="bold">un stage de la même durée</span>
                , durant lesquels je me suis perfectionné sur Photoshop,
                Illustrator, et l'intégration HTML/CSS.
                <br />
                <br /> En février 2018, j'ai ensuite suivi&nbsp;
                <span className="bold">
                  une formation de Développeur web de 5 mois&nbsp;
                </span>
                durant laquelle j'ai appris JavaScript, jQuery, React, PHP et
                MySQL.
                <br />
                <br />
                De janvier 2019 à janvier 2020, j'ai effectué{" "}
                <span className="bold">
                  une année en contrat de professionnalisation en tant que
                  Développeur Fullstack Javascript junior
                </span>{" "}
                où j'ai suivi des cours de React, React Native, NodeJS et
                Electron. En entreprise, j'ai pu prendre en expérience
                professionnelle et travailler en équipe sur un projet en React
                et NodeJS.
                <br />
                <br />
                La réalisation de projets personnels disponibles&nbsp;
                <a href="/projets" className="to-projets">
                  ici
                </a>
                &nbsp;m'ont permis d'étendre la variété de mes réalisations,
                allant&nbsp;
                <span className="bold">
                  d'applications web aux applications mobiles en passant par des
                  newsletters
                </span>
                .<br />
                <br />
                <span style={{ fontWeight: "bold" }}>
                  Je recherche à présent un emploi en tant que Développeur web
                  Fullstack junior.
                </span>
              </p>
            </div>
            <div className="resume-cv">
              <a href={cv} className="myButtonBlue">
                Voir mon CV
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
