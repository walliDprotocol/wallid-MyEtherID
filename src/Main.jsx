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
state = {
navCollapsed: true
}
onToggleNav = () => {
this.setState({ navCollapsed: !this.state.navCollapsed })
}
closeNav = () => {
this.setState({ navCollapsed: true });
}

render() {
return (
<HashRouter>
  <div>


    <div class="fixed-top">
      <nav class="navbar navbar-expand-md navbar-dark  header bg-green-dark ">
        <div class="container">
          <a className="navbar-brand" href="index.html">
            <img className="logoHeader" src={require('./img/myetherid-logo.png')} height="35" width="167" alt="MyEther ID Logo" />
          </a>
          <button className="navbar-toggler" type="button" onClick={this.onToggleNav}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={(this.state.navCollapsed ? 'collapse' : '' ) + ' navbar-collapse' }>
            <ul className="navbar-nav ml-auto">
              <li className="nav-link">
                <NavLink exact to="/" onClick={this.closeNav}>3.27.0</NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/view" onClick={this.closeNav}>English</NavLink>
              </li>
              <li className="nav-link">
                <img className="logoHeader" src={require('./img/ethereum-logo-branco@2x.png')} height="35" width="20" alt="MyEther ID Logo" />
              </li>

              <li className="nav-link">
                
                <select class="select-nav">
                  <option value="grapefruit">
                    Gas Price 51 Gwei
                  </option>
                </select>
                
              </li>
              <li className="nav-link">
              <select class="select-nav">
                  <option value="grapefruit">
                    Ethereum (ETH)
                  </option>
                </select>
              </li>
              
            </ul>

          </div>
        </div>
      </nav> 
      
      <div class="navbar subnav navbar-expand-md bg-light navbar-light ">
        <div class="container"> 
          <div class="navbar-collapse collapse pt-2 pt-md-0" id="navbar2">
            <ul class="navbar-nav navmenu-item">
              <li class="nav-item active">
              <NavLink exact to="/" onClick={this.closeNav}>Store Identity</NavLink>
              </li>
              <li class="nav-item">
              <NavLink to="/view" onClick={this.closeNav}>View Identities</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/transactions" onClick={this.closeNav}>Transactions</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/store" onClick={this.closeNav}>About us</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/help" onClick={this.closeNav}>Help</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>






    <Route exact path="/" component={Store} />
    <Route path="/store" component={Home} />
    <Route path="/view" component={View} />
    <Route path="/transactions" component={Transactions} />
    <Route path="/help" component={Help} />
    <Footer />
  </div>
</HashRouter>
);
}
}

export default Main;