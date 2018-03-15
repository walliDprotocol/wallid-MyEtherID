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
        <p>Please take some time to understand this for your own safety.</p>
        <p>No one can recover nor delete any action or transaction made by yourself, and no one has access to your passwords and keys so make sure you keep them in an accessible but safe place</p>
        <br />
        <h4>What is MEI:</h4>
        <br />
        <p>MyEther ID is a free, open-source, client-side interface.</p>
        <p>MyEtherID allows you to encrypt and store your certified identity data ( generated in BlockID’s <b>ImportID</b> desktop app) on the ethereum blockchain,check their smart contract addresses  and confirm their transactions.</p>
        <p>We allow you to interact directly with ethereum blockchain through your wallet public address while you remain in full control of your keys and identity certificates.</p>
        <p>You and only you are responsible for your security.</p>
        <p>The handling of your keys happens entirely on your computer, inside your browser.</p>
        <p>We never transmit, receive or store your private key, password, or other account information.</p>
        <p>If you send your public key (address) to someone, they can send you ETH or tokens.</p>
        <br />
        <Link to ='/import' ><button>Store My certified ID</button></Link>
      </div>
    );
  }
}

export default Home;
