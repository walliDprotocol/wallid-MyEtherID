import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to MyEtherID</h2>
        <br />
        <h4>Connect your off-chain identity to your ether wallet</h4>
        <br />
        <p>MyEtherID is a webapp that allows users to encrypt and store  real life certified identities on a smart contract.
          It is also a gateway to manage different certified identity types you might own and check the history of your ID transactions through BlockID protocol.
          It allows you to associate your identity attributes to your ether wallet without having access to your data or to your wallet keys.
          All  data is encrypted and decrypted by your own keys and associations to your wallet are made through Metamask.
          No decrypted data is ever accessed by anyone else but its owner nor stored on the Blockchain.</p>
        <p>Please take some time to understand this for your own safety.
          No one can recover nor delete any action or transaction made by yourself, and no one has access to your passwords and keys so make sure you keep them in an accessible but safe place.
        </p>
        <br />

        <div class="row">
        <div class="col-md-6 color">
          <br />
          <h4>What is MEI:</h4>
          <br />
            <ul>
              <li>MyEther ID is a free, open-source, client-side interface.</li>
              <li>MyEtherID allows you to encrypt and store your certified identity data ( generated in BlockID’s ImportID desktop app) on the Ethereum blockchain,check their smart contract addresses and confirm their transactions.</li>
              <li>We allow you to interact directly with Ethereum blockchain through your wallet public address while you remain in full control of your keys and identity certificates.</li>
              <li>You and only you are responsible for your security.</li>
              <li>The handling of your keys happens entirely on your computer, inside your browser.</li>
              <li>We never transmit, receive or store your private key, password, or other account information.</li>
              <li>If you send your public key (address) to someone, they can send you ETH or tokens.</li>
            </ul>
          <br />
        </div>
        <div class="col-md-6 row-height minHeight">
          <div className="fill">
            <img src={require('./blockchain.png')} alt="MyEtherID Logo" />
          </div>
        </div>
        </div>
        <br />
          <h2>Your ID in your Ether Wallet</h2>
          <br />
          <p>Encrypt and save your certified identity on the blockchain and associate it with your ether wallet. If you don’t have an ether wallet, you can create it securely and for free on MyEtherWallet.com. Create <a href="https://www.myetherwallet.com/">here</a>.</p>
          <p><a href="https://www.myetherwallet.com">What is MyEtherWallet?</a></p>

          <br />
          <p>First, You need to extract your attributes from your Identity Document and locally generate your ID data from BlockID’s ImportID desktop app. Once you generate it on the app, copy it to respective ID Data section below.</p>
          <p><a href="https://blockid.herokuapp.com">What is ImportID?</a></p>
          <p><a href="https://blockid.herokuapp.com">What is my ID Data?</a></p>
          <p><a href="https://blockid.herokuapp.com">What is BlockID?</a></p>
          <br />

          <p>If you haven’t installed Import ID on your computer, you can download it for free. <a href="https://blockid.herokuapp.com">Download here</a>.</p>
      </div>
    );
  }
}

export default Home;
