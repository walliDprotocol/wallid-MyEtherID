import React, { Component } from "react";
import ImportForm from './components/ImportForm';

class Import extends Component {
  render() {
    return (
      <main role="main" class="container">
        <div class="row justify-content-md-center pb-3 containerBorderBottom" id="top">
            <div class="col text-center">
                <h1>Store your Identity on the Blockchain</h1>
                <h2 class="colorGrey">
                    Encrypt your ID attributes onto a smart contract address and store them on your ether wallet.
                </h2>
            </div>
        </div>

        <div class="row pt-4">
            <div class="col">
                <h3>Select your identity type</h3>
            </div>
        </div>

        <div class="row pt-3 pb-3 containerBorderBottom">
          <div class="col">
        <ImportForm />
        </div>
        </div>
          <div class="row text-center pt-3 justify-content-md-center">
              <div class="col-md-10">
                  <h5 class="pb-3">First, You need to extract your attributes from your Identity Document and locally generate your ID data from BlockID’s ImportID desktop app. Once you generate it on the app, copy it to respective ID Data section below.</h5>
              </div>
          </div>
          <div class="row text-center containerBorderBottom pb-5">
                      <div class="col">
                          <a href="/" class="biggerLink" role="button" aria-pressed="true">What is BlockID?</a>
                      </div>
                      <div class="col">
                          <a href="/" class="biggerLink" role="button" aria-pressed="true">What is ImportID</a>
                      </div>
                      <div class="col">
                          <a href="/" class="biggerLink" role="button" aria-pressed="true">What is my ID Data?</a>
                      </div>
          </div>
          <div class="row pt-5 pb-5 containerBorderBottom">
              <div class="col text-center">
                  <h5 class="pb-3">If you haven’t installed Import ID on your computer, you can download it for free.</h5>
                  <a href="/" class="btn linkButtons btn-lg active" role="button" aria-pressed="true">Download here</a>
              </div>
          </div>
          <div class="row pt-3">
              <div class="col">
                  <h3>How to Protect Yourself From Loss</h3>
                  <p>If you lose your private key or metamask recovery keywords they are gone forever. Don't lose them.</p>
                  <ul>
                      <li>Make a backup of your keys. Do NOT just store them on your computer. Print them out on a piece of paper or save them to a USB drive.</li>
                      <li>Store this paper or USB drive in a different physical location. A backup is not useful if it is destroyed by a fire or flood along with your laptop.</li>
                      <li>Do not store your keys inn Dropbox, Google Drive, or other cloud storage. If that account is compromised, your funds will be stolen.</li>
                  </ul>
              </div>
          </div>
      </main>
    );
  }
}

export default Import;
