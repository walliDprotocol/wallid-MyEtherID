import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';

class Home extends Component {
  render() {
    return (
      <main role="main" class="container">
          <div class="row justify-content-md-center pb-2">
              <div class="col text-center">
                  <h1 class="pb-3">Welcome to MyEtherID</h1>
                  <h2 class="colorGrey">Connect your off-chain identity to your Ether Wallet</h2>
              </div>
          </div>
          <div class="row pt-3 justify-content-md-center containerBorderBottom">
              <div class="col">
                  <p>
                    MyEtherID is a webapp that allows users to encrypt and store real life certified identities on a smart contract. It is also a gateway to manage different certified identity types you might own and check the history of your ID transactions through BlockID protocol.
                  </p>
              </div>
              <div class="col">
                  <p>
                    It allows you to associate your identity attributes to your ether wallet without having access to your data or to your wallet keys.
                    All data is encrypted and decrypted by your own keys and associations to your wallet are made through Metamask.
                    No decrypted data is ever accessed by anyone else but its owner nor stored on the Blockchain.
                  </p>
              </div>
              <div class="col">
                  <p>
                    Please take some time to understand this for your own safety. No one can recover nor delete any action or transaction made by yourself, and no one has access to your passwords and keys so make sure you keep them in an accessible but safe place.
                  </p>
              </div>
          </div>
          <div class="row pt-5 pb-3 containerBorderBottom">
              <div class="col">
                  <h3 class="text-center colorBlue pb-5">What is MEI:</h3>
                  <div class="row">
                      <div class="col">
                          <ul class="meiTopics">
                              <li>MyEther ID is a free, open-source, client-side interface.</li>
                              <li>MyEtherID allows you to encrypt and store your certified identity data ( generated in BlockID’s ImportID desktop app) on the Ethereum blockchain,check their smart contract addresses and confirm their transactions.</li>
                              <li>We allow you to interact directly with Ethereum blockchain through your wallet public address while you remain in full control of your keys and identity certificates.</li>
                          </ul>
                      </div>
                      <div class="col">
                          <ul class="meiTopics">
                              <li>You and only you are responsible for your security.</li>
                              <li>The handling of your keys happens entirely on your computer, inside your browser.</li>
                              <li>We never transmit, receive or store your private key, password, or other account information.</li>
                              <li>If you send your public key (address) to someone, they can send you ETH or tokens.</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>

          <div class="row justify-content-md-center pb-5 containerBorderBottom pt-5">
              <div class="col-8">
                  <h2 class="colorBlue pb-3">Your ID in your Ether Wallet</h2>
                    <p>Encrypt and save your certified identity on the blockchain and associate it with your ether wallet.</p>
                    <p>If you don’t have an ether wallet, you can create it securely and for free on
                    <a href="https://www.myetherwallet.com/" target="_blank rel=noopener"> MyEtherWallet.com</a>.</p>
                    <a href="https://www.myetherwallet.com/" target="_blank rel=noopener" class="btn linkButtons btn-lg active" role="button" aria-pressed="true">Create here</a>
                    <br />
                    <a href="https://www.myetherwallet.com/" target="_blank rel=noopener">What is MyEtherWallet?</a>
              </div>
              <div class="col-4 text-right">
                <img class="imgBlockChain" src={require('./img/blockchain.svg')} alt="Blockchain" />
              </div>
          </div>
          <div class="row text-center pt-5 pb-5">
              <div class="col">
                <Link to="/import#top" class="btn linkButtons btn-lg active" role="button" aria-pressed="true">Start Storing Your ID</Link>
              </div>
          </div>
      </main>
    );
  }
}

export default Home;
