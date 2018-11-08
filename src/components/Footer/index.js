import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import cv from '../../documents/charpentier-cv.pdf';
import logo from '../../images/MC-Full-Transparent.png';
import './Footer.css';

class Footer extends Component {
  componentDidMount() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50 ) {
          $('.scrolltop:hidden').stop(true, true).fadeIn();
      } else {
          $('.scrolltop').stop(true, true).fadeOut();
      }
    });
    $(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})
  }

  render() {
    return (
      <div className="footer">
        <div className="container">
          <Row className="footer-text">
            <Col xs="12" sm="6" lg="3" className="footer-text-infos">
              <img src={ logo } alt="Logo Marc Charpentier" />
              <div className="footer-icons">
                <div className="footer-icons-line">
                <i className="fas fa-map-marker-alt"></i>
                <p>11 rue Louise Weiss, 75013 Paris</p>
                </div>
                <div className="footer-icons-line">
                <i className="fas fa-phone"></i>
                <p>+33 6 75 47 23 94</p>
                </div>
                <div className="footer-icons-line">
                <i className="fas fa-envelope"></i>
                <p>
                  <a href="mailto:marc_charpentier@hotmail.fr">marc_charpentier@hotmail.fr</a>
                </p>
                </div>
              </div>
            </Col>
            <Col xs="12" sm="6" lg="3" className="footer-text-apropos">
              <h4>À propos</h4>
              <p>Développeur web junior spécialisé Front-end, j'ai suivi deux formations en Webdesign et en Développement web,
                 me permettant de réaliser des sites à la fois fonctionnels et esthétiques.<br />
              </p>
            </Col>
            <Col xs="12" sm="6" lg="3" className="footer-text-ensavoirplus">
              <h4>En savoir plus</h4>
              <div className="footer-text-ensavoirplus-p">
              <p><Link href="/a-propos" to="/a-propos">Mon parcours</Link></p>
              <p><a href={ cv } download="CV_Marc-Charpentier">Mon CV</a></p>
              <p><Link href="/projets" to="/projets">Mes projets</Link></p>
              <p><Link href="/contact" to="/contact">Me contacter</Link></p>
              </div>
            </Col>
            <Col xs="12" sm="6" lg="3" className="footer-text-suivre">
              <h4>Me suivre</h4>
              <div className="footer-icons">
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
            </Col>
          </Row>
        </div>
        <div className="subfooter">
          <div className="container">
            <Row>
              <Col>
                <p>© Marc Charpentier - Développeur web junior - 2018 </p>
              </Col>
            </Row>
            </div>
        </div>
        <div className="scrolltop">
          <div className="scroll icon">
            <i className="fa fa-4x fa-angle-up"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;