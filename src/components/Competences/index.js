import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import html from '../../images/html.png';
import css from '../../images/css.png';
import javascript from '../../images/js.png';
import jquery from '../../images/jquery.png';
import react from '../../images/react.png';
import wordpress from '../../images/wordpress.png';
import photoshop from '../../images/photoshop.png';
import illustrator from '../../images/illustrator.png';

import './Competences.css';

class Competences extends Component {
  render() {
    return (
      <div className="competences">
        <div className="container">
          <div className="content">
            <h3>Compétences</h3>
            <div className="separator small white"></div>
            <Row className="conception-competences">
              <Col xs="12" sm="6" md="6" lg="3" className="">
                <img src={ html } alt="Icône HTML 5" />
                <p>HTML 5</p>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3" className="">
                <img src={ css } alt="Icône CSS 3" />
                <p>CSS 3</p>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3" className="">
                <img src={ javascript } alt="Icône JavaScript" />
                <p>JavaScript</p>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3" className="">
                <img src={ jquery } alt="Icône jQuery" />
                <p>jQuery</p>
              </Col>
            </Row>
            <Row className="conception-competences">
              <Col xs="12" sm="6" md="6"lg="3" className="">
                <img src={ react } alt="React JS" />
                <p>React JS</p>
              </Col>
              <Col xs="12" sm="6" md="6"lg="3" className="">
                <img src={ wordpress } alt="Icône Wordpress" />
                <p>Wordpress</p>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3" className="">
                <img src={ photoshop } alt="Icône Photoshop CS6" />
                <p>Photoshop CS6</p>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3" className="">
                <img src={ illustrator } alt="Icône Illustrator CS6" />
                <p>Illustrator CS6</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Competences;