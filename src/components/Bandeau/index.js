import React, { Component } from 'react';

import './Bandeau.css';

class Bandeau extends Component {
  render() {
    const style = {
      backgroundImage: "url("+ this.props.backgroundImage +")",
      backgroundSize: "cover",
      backgroundPosition: "center center",
    };

    return (
      <div className="bandeau" style={ style }>
        <div className="container">
          <div className="content">
            <h2 className="bandeau-title">{this.props.page}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Bandeau;