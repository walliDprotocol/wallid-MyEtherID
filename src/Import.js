import React, { Component } from "react";
import ImportForm from './components/ImportForm';

class Import extends Component {
  render() {
    return (
      <div>
      <h2>Import your BlockID Identity</h2>
      <br />
      <p>Encrypt and save  your certified identity on the blockchain and associate it with your ether wallet.
      If you don’t have an ether wallet, you can create it securely and for free on MyEtherWallet.com. Create <a href="https://www.myetherwallet.com/">here</a>.</p>
      <p><a href="https://www.myetherwallet.com">What is MyEtherWallet?</a></p>

      <br />
      <p>You need to locally generate your ID data from BlockID’s ImportID desktop app. Once you generate it on the app, copy it to respective ID Data section below.</p>
      <p><a href="https://blockid.herokuapp.com">What is BlockID?</a></p>
      <p><a href="https://blockid.herokuapp.com">What is my ID Data?</a></p>

      <br />
      <p>If you haven’t installed Import ID on your computer, you can download it for free <a href="https://blockid.herokuapp.com">here</a>.</p>

      <br />
      <br />
        <div class="row">
        <div class="col-md-12">
          <br />
          <h4>Store your BlockID on the blockchain</h4>
          <br />
          <ImportForm />
          <br />
        </div>
        </div>



      <br />
      <br />
      <h4>How to protect Yourself From Loss</h4>
      <p>If you lose your private key or encryption password they are gone forever. Don't lose them.</p>

        <ul>
          <li>Make a backup of your keys. Do NOT just store them on your computer. Print them out on a piece of paper or save them to a USB drive.</li>
          <li>Store this paper or USB drive in a different physical location. A backup is not useful if it is destroyed by a fire or flood along with your laptop.</li>
          <li>Do not store your keys inn Dropbox, Google Drive, or other cloud storage. If that account is compromised, your funds will be stolen.</li>
        </ul>

      </div>
    );
  }
}

export default Import;
