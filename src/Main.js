import React, { Component } from "react";
import { HashRouter } from 'react-router-dom'
import { Route } from 'react-router'
import { NavLink } from 'react-router-dom'

import Home from './Home';
import Import from './Import';
import Browse from './Browse';
import List from './List';
import Help from './Help';
import Footer from './Footer';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>MyEtherID</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/import">Store Identity</NavLink></li>
            <li><NavLink to="/browse">View Identities</NavLink></li>
            <li><NavLink to="/list">Transactions</NavLink></li>
            <li><NavLink to="/help">Help</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/import" component={Import}/>
          <Route path="/browse" component={Browse}/>
          <Route path="/list" component={List}/>
          <Route path="/help" component={Help}/>
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default Main;
