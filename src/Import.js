import React, { Component } from "react";
import ImportForm from './components/ImportForm';

class Import extends Component {
  render() {
    return (
      <div>
      <h2>Import MyBlockID identity</h2>
      <br />
      <p>Encrypt and save  your certified identity on the blockchain and associate it with your ether wallet.</p>
      <p>If you don’t have an ether wallet, you can create it securely and for free on MyEtherWallet. Create <a href="https://www.myetherwallet.com/">here</a>.</p>
      <p>What is MyEtherWallet? <a href="https://www.myetherwallet.com/">Press here</a>.</p>

      <br />
      <p>You need to locally generate your ID data from BlockID’s ImportID desktop app. Once you generate it on the app, copy it to respective ID Data section below.</p>
      <p><a href="https://blockid.herokuapp.com">What is BlockID?</a></p>
      <p><a href="https://blockid.herokuapp.com">What is my ID Data?</a></p>

      <br />
      <p>If you haven’t installed Import ID on your computer, you can download it for free <a href="https://blockid.herokuapp.com">here</a>.</p>

      <br />
      <br />
      <h4>Start Import MyBlockID identity</h4>
      <ImportForm />
      <br />
      <br />
      <h4>How To Protect Yourself from loss</h4>
      <p>If you lose your private key or  encryption password, it is gone forever. Don't lose it.</p>
      <ul> - Make a backup of your private key and password. Do NOT just store it on your computer. Print it out on a piece of paper or save it to a USB drive.</ul>
      <ul> - Store this paper or USB drive in a different physical location. A backup is not useful if it is destroyed by a fire or flood along with your laptop.</ul>
      <ul> - Do not store your private key in Dropbox, Google Drive, or other cloud storage. If that account is compromised, your funds will be stolen.</ul>

      </div>
    );
  }
}

export default Import;
