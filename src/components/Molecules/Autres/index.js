import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import certificat from '../../../images/picto-certificat.png';
import diplome from '../../../images/picto-diplome.png';
import anglais from '../../../images/picto-anglais.png';
import permis from '../../../images/picto-permis.png';
import $ from 'jquery';

import './Autres.css';

class Autres extends Component {
  componentDidMount() {
    var diplome = $('.autres-distinctions-diplome').children('img');
    var certificat = $('.autres-distinctions-certificat').children('img');
    var anglais = $('.autres-distinctions-anglais').children('img');
    var permis = $('.autres-distinctions-permis').children('img');

    function up() {
      diplome.on('mouseover', function() {
        diplome.css('padding-bottom', '5px');
        diplome.css('cursor', 'pointer');
      })
      certificat.on('mouseover', function() {
        certificat.css('padding-bottom', '5px');
        certificat.css('cursor', 'pointer');
      })
      anglais.on('mouseover', function() {
        anglais.css('padding-bottom', '5px');
        anglais.css('cursor', 'pointer');
      })
      permis.on('mouseover', function() {
        permis.css('padding-bottom', '5px');
        permis.css('cursor', 'pointer');
      })
    }

    function stop() {
      diplome.on('mouseout', function() {
        diplome.css('padding-bottom', '0px');
      })
      certificat.on('mouseout', function() {
        certificat.css('padding-bottom', '0px');
      })
      anglais.on('mouseout', function() {
        anglais.css('padding-bottom', '0px');
      })
      permis.on('mouseout', function() {
        permis.css('padding-bottom', '0px');
      })
    }

    up();
    setTimeout(stop, 1000);
  }

  render() {
    return (
      <div className="autres">
        <div className="container">
          <div className="content">
              <h3 className="wow fadeInDown">Autres</h3>
              <div className="separator small grey"></div>
              <Row className="autres-distinctions">
              <Col xs="12" sm="6" lg="3" className="autres-distinctions-diplome">
                <img src={ diplome } alt="Icône diplôme" />
                <h4 className="wow fadeInDown">Titre professionnel</h4>
                <p>Titre professionnel de niveau III Designer Web</p>
              </Col>
              <Col xs="12" sm="6" lg="3" className="autres-distinctions-certificat">
                <img src={ certificat } alt="Icône certificat" />
                <h4 className="wow fadeInDown">Certificat</h4>
                <p>Certifié OpQuast niveau avancé (815/1000)</p>
              </Col>
              <Col xs="12" sm="6" lg="3" className="autres-distinctions-anglais">
                <img src={ anglais } alt="Icône anglais" />
                <h4 className="wow fadeInDown">Anglais</h4>
                <p>Niveau avancé en anglais</p>
              </Col>
              <Col xs="12" sm="6" lg="3" className="autres-distinctions-permis">
                <img src={ permis } alt="Icône permis" />
                <h4 className="wow fadeInDown">Permis</h4>
                <p>Titulaire du permis B</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Autres;