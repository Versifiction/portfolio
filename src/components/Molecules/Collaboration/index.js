import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Collaboration.css';

class Collaboration extends Component {
  render() {
    return (
      <div className="collaboration">
        <div className="container">
          <div className="content">
            <h3>Et si nous collaborions ?</h3>
            <div className="separator small white"></div>
            <p>Il vous suffit simplement de me contacter, n'hésitez pas à le faire via le bouton ci-dessous.</p>
            <Link href="/contact" to="/contact" className="myButtonWhite">Me contacter</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Collaboration;