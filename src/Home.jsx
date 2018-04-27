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
                    MyEtherID is a webapp that allows you to encrypt and store real life certified identities on a smart contract.
                    It is also a gateway to manage different certified identity types you might own and check the history of your ID transactions through BlockID protocol.
                  </p>
              </div>
              <div class="col">
                  <p>
                    It allows you to associate your identity attributes to your Ethereum Wallet without having access to your data or to your wallet keys.
                    All data is encrypted and decrypted by your own keys and associations to your wallet are made through Metamask.
                    No decrypted data is ever accessed by anyone else but its owner nor stored on the Blockchain.
                  </p>
              </div>
              <div class="col">
                  <p>
                    Please take some time to understand this for your own safety. No one can recover nor delete any action or transaction made by yourself, and no one has access
                    to your passwords and keys so make sure you keep them in an accessible but safe place.
                  </p>
              </div>
          </div>
          <div class="row pt-5 pb-3 containerBorderBottom">
              <div class="col">
                  <h3 class="text-center colorBlue pb-5">What is MyEtherID</h3>
                  <div class="row">
                      <div class="col">
                        <p>MyEther ID is a free, open-source, client-side interface.</p>
                        <p>MyEtherID allows you to encrypt and store your certified identity data on the Ethereum blockchain,
                          check the corresponding smart contract addresses, and to confirm the transactions performed with those smart contracts.</p>
                        <p>MyEtherID allows you to interact directly with the Ethereum blockchain, using your public Ethereum Wallet address.
                          You are always in full control of your keys and identity certificates:</p>
                          <ul class="meiTopics">
                                <li>You are the sole entitled responsible for the security of your actions.</li>
                                <li>The handling of your keys happens entirely on your computer, inside your browser.</li>
                                <li>MyEtherID shall never store your private key, recovery keywords, or any other account information.
                                  All the input information will be solely used to interact directly with the Ethereum blockchain.</li>
                          </ul>
                      </div>
                      <div class="col">
                        <p>Your account has a public and a private key. Whenever requested by third-parties, always supply your public key, which can be used
                          to retrieve your ciphered blockchain information, never your private key. Afterwards, that information shall only be readable by
                          you or entities trusted by yourself, upon you deciphering it with matamask plugin.</p>
                        <p>Please take some time to read this, for your own good and safety:</p>
                          <ul class="meiTopics">
                              <li>It is not possible to recover nor to delete any action or transaction performed.</li>
                              <li>Nobody will be able to access your keys or recovery keywords, so please make sure to keep them in an accessible but safe place.</li>
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
                <Link to="/store#top" class="btn linkButtons btn-lg active" role="button" aria-pressed="true">Start Storing your ID</Link>
              </div>
          </div>
      </main>
    );
  }
}

export default Home;
