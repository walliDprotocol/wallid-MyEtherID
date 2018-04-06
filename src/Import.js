import React, { Component } from "react";
import ImportForm from './components/ImportForm';

class Import extends Component {
  render() {
    return (
      <div>
      <h2>Store your Identity on the Blockchain</h2>
      <br />
      <p>Encrypt your ID attributes onto a smart contract address and store them on your ether wallet.</p>
      <p>First, You need to extract your attributes from your Identity Document and locally generate your ID data from BlockID’s ImportID desktop app. Once you generate it on the app, copy it to respective ID Data section below.</p>
        <p><a href="https://blockid.herokuapp.com">What is ImportID?</a></p>
        <p><a href="https://blockid.herokuapp.com">What is my ID Data?</a></p>
        <p><a href="https://blockid.herokuapp.com">What is BlockID?</a></p>
      <br />
      <p>If you haven’t installed Import ID on your computer, you can download it for free <a href="https://blockid.herokuapp.com">here</a>.</p>

      <br />
      <br />
        <div class="row">
        <div class="col-md-12">
          <br />
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
