import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';

class Home extends Component {
  render() {
    return (
      <main role="main">
        <div className="container">

          <div className="row justify-content-md-center pb-2">
            <div className="col text-center containerBorderBottom">
              <h2 className="pb-2">About us</h2>
              <h3 className="orange">Connect your off-chain identity to your Ethereum wallet</h3>
            </div>
          </div>

          <div className="jumbotron">
            <div className="row pt-3 justify-content-md-center pb-2 containerBorderBottom">
              <div class="intendedText">
                <h3 className="text-center pb-2 mt-2">What is MyEtherID?</h3>
                <p>
                  MyEtherID is a webapp that allows you to encrypt and store real life certified identities on a smart contract.
                  It is also a gateway to manage different certified identity types you might own and check the history of your ID transactions through WalliD protocol.
                </p>
                <p>
                  It allows you to associate your identity attributes to your Ethereum Wallet without having access to your data or to your wallet keys.
                  All data is encrypted and decrypted by your own keys and associations to your wallet are made through MetaMask.
                  No decrypted data is ever accessed by anyone else but its owner nor stored on the Blockchain.
                </p>
                <p>MyEther ID is a free, open-source, client-side interface. MyEtherID allows you to interact directly with the Ethereum blockchain, using your public Ethereum Wallet address.
                  You are always in full control of your keys and identity certificates:
                </p>
                <ul>
                  <li>You are the sole entitled responsible for the security of your actions.</li>
                  <li>The handling of your keys happens entirely on your computer, inside your browser.</li>
                  <li>MyEtherID shall never store your private key, recovery keywords, or any other account information.
                    All the input information will be solely used to interact directly with the Ethereum blockchain.</li>
                </ul>
              </div>
            </div>

            <div className="row justify-content-md-center containerBorderBottom pb-4 pt-3">
              <div className="col-md-11 text-center">
                <h3 className="pb-2 mt-2">Your ID in your Ethereum Wallet</h3>
                <p>Encrypt and save your certified identity on the blockchain and associate it with with your Ethereum wallet.
                If you don’t have an Ethereum wallet, you can create it securely and for free on
                  <a class="inlineLink" href="https://www.myetherwallet.com/" target="_blank rel=noopener"> MyEtherWallet.com</a>.</p>
                  <p class="linkP"><Link to="/help#top" className="link">What is MyEtherWallet?</Link></p>

                {/* <div className="col-md-4 text-center">
                  <img className="imgBlockChain" src={require('./img/blockchain.svg')} alt="Blockchain" />
                </div> */}
                <a href="/store#top">
                    <button type="button" class="btn btn-block btn-lg btnStyle">Start Storing your ID</button>
                </a>
              </div>
            </div>

            <div className="row justify-content-md-center containerNoBorder mt-3 pb-2">
              <div class="intendedText">
                <h3 className="pb-1 mt-3">Stay safe on the Blockchain</h3>
                <p>Your account has a public and a private key. Whenever requested by third-parties, always supply your public key, which can be used
                  to retrieve your ciphered blockchain information, never your private key. Afterwards, that information shall only be readable by
                  you or entities trusted by yourself, upon you deciphering it with matamask plugin.</p>
                <p>How to Protect Yourself From Loss </p>
                <ul>
                  <li>If you lose your private key or MetaMask recovery keywords they are gone forever. Don't lose them.</li>
                  <li>Make a backup of your keys. Do NOT just store them on your computer. Print them out on a piece of paper or save them to a USB drive.</li>
                  <li>Store this paper or USB drive in a different physical location. A backup is not useful if it is destroyed by a fire or flood along with your laptop.</li>
                  <li>Do not store your keys inn Dropbox, Google Drive, or other cloud storage. If that account is compromised, your funds will be stolen.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

     

      </main>
      );
    }
  }

  export default Home;
