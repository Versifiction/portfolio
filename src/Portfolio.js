import React, { Component } from 'react';
import './Portfolio.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

class Portfolio extends Component {
  render() {
    return (
      <Router>
        <App />
      </Router>
    );
  }
}

export default Portfolio;