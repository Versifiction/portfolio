import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Accueil from '../Pages/Accueil';
import Apropos from '../Pages/Apropos';
import Projets from '../Pages/Projets';
import Contact from '../Pages/Contact';
import MentionsLegales from '../Pages/MentionsLegales';
// eslint-disable-next-line
import $ from 'jquery';
// eslint-disable-next-line
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="portfolio">
        <Route path='/' exact component={ Accueil } />
        <Route path='/a-propos' exact component={ Apropos } />
        <Route path='/projets' exact component={ Projets } />
        <Route path='/contact' exact component={ Contact } />
        <Route path='/mentions-legales' exact component={ MentionsLegales } />
      </div>
    )
  }
}


export default App;