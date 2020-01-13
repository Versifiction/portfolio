import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import elaboration from '../../../images/elaboration.svg';
import realisation from '../../../images/realisation.svg';
import conception from '../../../images/conception.svg';
// eslint-disable-next-line
import $ from 'jquery';

import './Conception.css';


class Conception extends Component {
  render() {
    return (
      <div className="conception">
        <div className="container">
          <div className="content">
            <h3 className="wow fadeInDown">Vous recherchez un développeur web ?</h3>
            <div className="separator small grey"></div>
            <Row className="conception-competences">
              <Col xs="12" sm="6" md="4" lg="4" className="conception-competences-elaboration wow bounceInLeft">
                <img src={ elaboration } alt="Icône élaboration" />
                <h4 className="wow fadeInDown">Identité visuelle</h4>
                <p>Elaboration de la charte graphique, des wireframes et des maquettes de votre site</p>
              </Col>
              <Col xs="12" sm="6" md="4" lg="4" className="conception-competences-realisation wow bounceInUp">
                <img src={ realisation } alt="Icône réalisation" />
                <h4 className="wow fadeInDown">Webdesign</h4>
                <p>Réalisation d'éléments graphiques pour votre site (images, bannières, illustrations...)</p>
              </Col>
              <Col xs="12" sm={{ size: 6, offset: 3 }} md={{ size: 4, offset: 0 }} lg="4" className="conception-competences-conception wow bounceInRight">
                <img src={ conception } alt="Icône conception" />
                <h4 className="wow fadeInDown">Développement</h4>
                <p>Conception de votre site par mes compétences en développement web</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Conception;