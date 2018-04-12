import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to MyEtherID</h2>
        <br />
        <h4>Connect your off-chain identity to your Ethereum Wallet</h4>
        <br />
        <p>MyEtherID is a webapp that allows users to encrypt and store  real life certified identities on a smart contract.
          It is also a gateway to manage different certified identity types you might own and check the history of your ID transactions through BlockID protocol.
          It allows you to associate your identity attributes to your Ethereum Wallet without having access to your data or to your wallet keys.
          All  data is encrypted and decrypted by your own keys and associations to your wallet are made through Metamask.
          No decrypted data is ever accessed by anyone else but its owner nor stored on the Blockchain.</p>

        <br />

        <div class="row">
        <div class="col-md-6 color">
          <br />
          <h4>What is MyEtherID:</h4>
          <br />
            <ul>
              <li>MyEtherID is a free, open-source, client-side interface.</li>
              <li>MyEtherID allows you to encrypt and store your certified identity data generated in BlockID’s <a href="https://blockid.herokuapp.com">ImportID</a> desktop app on the Ethereum blockchain, check in one or more smart contracts on the Ethereum blockchain, to check the corresponding smart contract addresses, and to confirm the transactions performed with those smart contracts.</li>
              <li>MyEtherID allows you to interact directly with the Ethereum blockchain, using your public Ethereum Wallet address. You are always in full control of your keys and identity certificates:</li>
              <ul>
                <li>You are the sole entitled responsible for the security of your actions.</li>
                <li>The handling of your keys happens entirely on your computer, inside your browser.</li>
                <li>MyEtherID shall never store your private key, password, or any other account information. All the input information will be solely used to interact directly with the Ethereum blockchain.</li>
              </ul>
              <li>Your account has a public and a private key. Whenever requested by third-parties, always supply your public key, which can be used to retrieve your ciphered blockchain information, never your private key. Afterwards, that information shall only be readable by you, upon you deciphering it with your private key.</li>
              <li>Please take some time to read this, for your own good and safety:
                <ul>
                  <li>It is not possible to recover nor to delete any action or transaction performed.</li>
                  <li>Nobody will be able to access your passwords and keys, so please make sure to keep them in an accessible but safe place.</li>
                </ul>
              </li>
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
