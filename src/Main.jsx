import React, { Component } from "react";
import { HashRouter } from 'react-router-dom'
import { Route } from 'react-router'
import { NavLink } from 'react-router-dom'

import Home from './Home';
import Store from './Store';
import View from './View';
import Transactions from './Transactions';
import Help from './Help';
import Footer from './Footer';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <header>
            <div class="container">
              <nav class="navbar navbar-expand-md fixed-top">
                <a class="navbar-brand" href="index.html">
                  <img class="logoHeader" src={require('./img/myetherid-logo.svg')} alt="MyEther ID Logo" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item nav-link">
                      <NavLink exact to="/">Home Page</NavLink>
                    </li>
                    <li class="nav-item nav-link">
                      <NavLink to="/store">Store Identity</NavLink>
                    </li>
                    <li class="nav-item nav-link">
                      <NavLink to="/view">View Identities</NavLink>
                    </li>
                    <li class="nav-item nav-link">
                      <NavLink to="/transactions">Transactions</NavLink>
                    </li>
                    <li class="nav-item nav-link">
                      <NavLink to="/help">Help</NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </header>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/store" component={Store}/>
            <Route path="/view" component={View}/>
            <Route path="/transactions" component={Transactions}/>
            <Route path="/help" component={Help}/>
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default Main;
