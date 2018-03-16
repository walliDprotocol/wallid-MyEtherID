import React, { Component } from "react";
import {
  Link
} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to MyEtherID</h2>
        <br />
        <h4>Connect your off-chain identity to your Ether Wallet</h4>
        <br />
        <p>Please take some time to understand this for your own safety.
          No one can recover nor delete any action or transaction made by yourself, and no one has access to your passwords and keys so make sure you keep them in an accessible but safe place</p>
        <br />

        <div class="row">
        <div class="col-md-6 color">
          <br />
          <h4>What is MEI:</h4>
          <br />
            <ul>
              <li>MyEther ID is a free, open-source, client-side interface.</li>
              <li>MyEtherID allows you to encrypt and store your certified identity data ( generated in BlockID’s <b>ImportID</b> desktop app) on the Ethereum blockchain,check their smart contract addresses  and confirm their transactions.</li>
              <li>We allow you to interact directly with Ethereum blockchain through your wallet public address while you remain in full control of your keys and identity certificates.</li>
              <li>You and only you are responsible for your security.</li>
              <li>The handling of your keys happens entirely on your computer, inside your browser.</li>
              <li>We never transmit, receive or store your private key, password, or other account information.</li>
              <li>If you send your public key (address) to someone, they can send you ETH or tokens.</li>
            </ul>
          <br />
        </div>
        <div class="col-md-6 row-height">
          <div className="fill">
            <img src={require('./blockchain.png')} alt="MyEtherID Logo" />
          </div>
        </div>
        </div>

        <br />

        <div class="row">
        <Link to ='/import' ><button>Store My certified ID</button></Link>
        </div>
      </div>
    );
  }
}

export default Home;
