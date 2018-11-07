import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import memory from '../../images/memorymac.png';
import oresto from '../../images/orestomac.png';
import calculatrice from '../../images/calculatricemac.png';
import apiRatp from '../../images/apiratpmac.png';
import chat from '../../images/chatmac.png';
import plusOuMoins from '../../images/plusmoinsmac.png';
import cimade from '../../images/newslettermac.png';
import journeeFemmes from '../../images/8marsmac.png';
import './Realisations.css';

class Realisations extends Component {
  render() {
    return (
      <div className="realisations">
        <div className="container">
          <div className="content">
            <h3>Réalisations</h3>
            <div className="separator not-centered"></div>
            <p>Vous pouvez survoler chaque réalisation pour avoir le court descriptif de la réalisation</p>
            <Row className="realisations-exemples">
              <Col xs="12" sm="6" lg="4" className="content-base">
                <a href="https://versifiction.github.io/memory/">
                  <div className="content-overlay"></div>
                  <img src={ memory } alt="Projet memory" />
                  <div className="content-details fadeIn-top">
                    <h5>Memory</h5>
                    <p>Création en Javascript natif du célèbre jeu du Memory</p>
                  </div>
                </a>
              </Col>
              <Col xs="12" sm="6" lg="4" className="content-base oresto">
                <a href="https://github.com/Versifiction/oresto">
                  <div className="content-overlay"></div>
                  <img src={ oresto } alt="Projet oresto" />
                  <div className="content-details fadeIn-top">
                    <h5>O'Resto</h5>
                    <p>Création d'un restaurant fictif avec choix de menus, commande et paiement en ligne réalisé avec ReactJS</p>
                  </div>
                </a>
              </Col>
              <Col xs="12" sm="6" lg="4" className="content-base calculatrice">
                <a href="https://versifiction.github.io/calculatrice/">
                  <div className="content-overlay"></div>
                  <img src={ calculatrice } alt="Projet calculatrice" />
                  <div className="content-details fadeIn-top">
                    <h5>Calculatrice</h5>
                    <p>Création d'une calculatrice, sur le modèle de l'app IOS, en ReactJS</p>
                  </div>
                </a>
              </Col>
            </Row>
            <Row className="realisations-exemples">
              <Col xs="12" sm="6" lg="4" className="content-base api-ratp">
                <a href="https://versifiction.github.io/api-ratp-horaires/">
                  <div className="content-overlay"></div>
                  <img src={ apiRatp } alt="Projet api-ratp" />
                  <div className="content-details fadeIn-top">
                    <h5>Horaires RATP</h5>
                    <p>Mini-site donnant en temps réel les temps d'attentes des transports de la RATP, réalisé en ReactJS</p>
                  </div>
                </a>
              </Col>
              <Col xs="12" sm="6" lg="4" className="content-base chat">
                <a href="https://github.com/Versifiction/chat">
                  <div className="content-overlay"></div>
                  <img src={ chat } alt="Projet chat" />
                  <div className="content-details fadeIn-top">
                    <h5>Messagerie instantanée</h5>
                    <p>Création d'une messagerie instantanée avec ReactJS, Express et Socket.io</p>
                  </div>
                </a>
              </Col>
              <Col xs="12" sm="6" lg="4" className="content-base plus-ou-moins">
                <a href="https://versifiction.github.io/plus-moins/">
                  <div className="content-overlay"></div>
                  <img src={ plusOuMoins } alt="Projet plus-ou-moins" />
                  <div className="content-details fadeIn-top">
                    <h5>Jeu du Plus ou Moins</h5>
                    <p>Création en Javascript natif du célèbre jeu du "Plus ou Moins".</p>
                  </div>
                </a>
              </Col>
            </Row>
            <Row className="realisations-exemples">
              <Col xs="12" sm="6" lg="4" className="content-base cimade">
                <div className="content-overlay"></div>
                <img src={ cimade } alt="Projet cimade" />
                <div className="content-details fadeIn-top">
                  <h5>Newsletter La Cimade</h5>
                  <p>Refonte graphique et intégration de la newsletter de l'association La Cimade</p>
                </div>
              </Col>
              <Col xs="12" sm="6" lg="4" className="content-base journee-femmes">
                <div className="content-overlay"></div>
                <img src={ journeeFemmes } alt="Projet journee-femmes" />
                <div className="content-details fadeIn-top">
                  <h5>La Journée Internationale des droits des femmes</h5>
                  <p>Conception / réalisation graphique d’un mini-site pour la Journée des Droits des Femmes</p>
                </div>
              </Col>
              <Col xs="12" sm="6" lg="4">
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Realisations;