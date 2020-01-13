import React, { Component } from 'react';
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../../images/MC-Full-Transparent.png';
import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="navigation">
        <Navbar expand="md">
          <div className="container">
            <NavbarBrand href="/"><img src={ logo } alt="Logo Marc Charpentier" /></NavbarBrand>
            <NavbarToggler onClick={this.toggle} className="navbar-toggle" />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link href="/" to="/">Accueil</Link>
                </NavItem>
                <NavItem>
                  <Link href="/a-propos" to="/a-propos">À propos</Link>
                </NavItem>
                <NavItem>
                  <Link href="/projets" to="/projets">Projets</Link>
                </NavItem>
                <NavItem>
                  <Link href="/contact" to="/contact">Contact</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

Navigation.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

export default Navigation;