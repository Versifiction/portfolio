import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import elaboration from '../../images/elaboration.svg';
import realisation from '../../images/realisation.svg';
import conception from '../../images/conception.svg';
import $ from 'jquery';
import './Conception.css';

class Conception extends Component {
  componentDidMount() {
    var elaboration = $('.conception-competences-elaboration').children('img');
    var realisation = $('.conception-competences-realisation').children('img');
    var conception = $('.conception-competences-conception').children('img');

    function up() {
      elaboration.on('mouseover', function() {
        elaboration.css('padding-bottom', '5px');
        elaboration.css('cursor', 'pointer');
      })
      realisation.on('mouseover', function() {
        realisation.css('padding-bottom', '5px');
        realisation.css('cursor', 'pointer');
      })
      conception.on('mouseover', function() {
        conception.css('padding-bottom', '5px');
        conception.css('cursor', 'pointer');
      })
    }

    function stop() {
      elaboration.on('mouseout', function() {
        elaboration.css('padding-bottom', '0px');
      })
      realisation.on('mouseout', function() {
        realisation.css('padding-bottom', '0px');
      })
      conception.on('mouseout', function() {
        conception.css('padding-bottom', '0px');
      })
    }

    up();
    setTimeout(stop, 1000);
  }
  render() {
    return (
      <div className="conception">
        <div className="container">
          <div className="content">
            <h3>Vous recherchez un développeur web ?</h3>
            <div className="separator small grey"></div>
            <Row className="conception-competences">
              <Col xs="12" sm="6" md="4" lg="4" className="conception-competences-elaboration">
                <img src={ elaboration } alt="Icône élaboration" />
                <h4>Identité visuelle</h4>
                <p>Elaboration de la charte graphique, des wireframes et des maquettes de votre site</p>
              </Col>
              <Col xs="12" sm="6" md="4" lg="4" className="conception-competences-realisation">
                <img src={ realisation } alt="Icône réalisation" />
                <h4>Webdesign</h4>
                <p>Réalisation d'éléments graphiques pour votre site (images, bannières, illustrations...)</p>
              </Col>
              <Col xs="12" sm={{ size: 6, offset: 3 }} md={{ size: 4, offset: 0 }} lg="4" className="conception-competences-conception">
                <img src={ conception } alt="Icône conception" />
                <h4>Développement</h4>
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