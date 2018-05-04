import React, { Component } from "react";
import {ButtonExpand} from './js/disclosureButton';

class Help extends Component {

  /* run after component render */
  componentDidMount(){
    var buttons =  document.querySelectorAll('button[aria-expanded][aria-controls]');
    for (var i = 0; i < buttons.length; i++) {
      var be = new ButtonExpand(buttons[i]);
      be.init();
    }
  }

  /* run before component render */
  componentWillMount(){
  }
  /* Initialize Hide/Show Buttons */

  render() {
    return (
      <main role="main" className="container">
        <div className="scroll-pre"></div>
        <div className="row justify-content-md pb-3 containerBorderBottom">
          <div className="col text-center">
            <h1 className="pb-3">Help</h1>
              <h2 className="colorGrey">
                  Frequently-asked questions
              </h2>
          </div>
        </div>
        <dl className="faq">
          <dt>
            <button aria-expanded="false" aria-controls="faq1_desc">
              What is BlockID?
            </button>
          </dt>
          <dd>
            <p id="faq1_desc" className="desc containerBorderBottom containerBorderTop">



              BlockID is an Ethereum blockchain protocol designed with the purpose to store encypted id attributes from certified Citizen Cards
              in smart contracts in Ethereum blockchain and to provide identity certifying services. At the present time there are three distinct
              applications running on BlockID’s protocol: ImportID, MyEtherID, VerifyID.

            </p>
          </dd>
          <dt>
            <button aria-expanded="false" aria-controls="faq2_desc">
              What is ImportID?
            </button>
          </dt>
          <dd>
            <p id="faq2_desc" className="desc containerBorderBottom containerBorderTop">



              ImportID is an open source desktop app available for Windows and Linux that allows you to extract your ID attributes from your Citizen Card or
              other supported Identity certified document. ImportID’s embedded algorithm runs a validation process to make sure all ID data created within
              the app comes from a certified and authentic ID document and generates a coded textblock (ID Data) with your attributes in a format supported
              by the Blockchain storing functionX of MyetherID.

            </p>
          </dd>
          <dt>
            <button aria-expanded="false" aria-controls="faq3_desc">
              What is VerifyID?
            </button>
          </dt>
          <dd>
            <p id="faq3_desc" className="desc containerBorderBottom containerBorderTop">



              WE STILL NEED TO DEFINE THIS

            </p>
          </dd>
          <dt>
            <button aria-expanded="false" aria-controls="faq4_desc">
              Which Identity Types are supported by BlockID’s protocol?
            </button>
          </dt>
          <dd>
            <p id="faq4_desc" className="desc containerBorderBottom containerBorderTop">



              At the present moment only Portuguese Citizenship Card certificates are compatible with MyEtherID. BlockID’s team is working on the expansion of ImportID’s
              attribute certificate recognition feature to other identity types based on certificate X 509. It means in the near future all European Union Citizenship Cards
              data will be supported. Further identity certificates will be added later.

            </p>
          </dd>
          <dt>
            <button aria-expanded="false" aria-controls="faq5_desc">
              What are the advantages of storing my Identity on the Blockchain?
            </button>
          </dt>
          <dd>
            <p id="faq5_desc" className="desc containerBorderBottom containerBorderTop">



              Encrypting your Identity certificates on the blockchain is  the safest way to store your identity in itself. By merging your attributes in a smart contract
              associated to your ether wallet, you solely will be able to access, trade and audit them. At the same time it is a safe way to store your identity it is
              also the most efficient way to trade your attributes online. By engaging in KYC and registration processes in websites and applications, you can instantly
              share your encrypted attributes and they will be able to instantly verify the validity of that data and approve your application.

            </p>
          </dd>
          <dt>
            <button aria-expanded="false" aria-controls="faq6_desc">
              What can i do with my ID Smart Contract?
            </button>
          </dt>
          <dd>
            <p id="faq6_desc" className="desc containerBorderBottom containerBorderTop">



              You can check what’s inside a smart contract, send its information to other wallets or apps. You can also verify the smart contracts’ data on MyEtherId Store
              Identity page using Metamask to decrypt your information and you can paste your smart contract address in any compatible kyc app to provide your
              proof-of-identity (POI) to that service and instantly succeed in any identity required application.

            </p>
          </dd>
          <dt>
            <button aria-expanded="false" aria-controls="faq7_desc">
              What’s a  Proof-of-identity (POI)?
            </button>
          </dt>
          <dd>
            <p id="faq7_desc" className="desc containerBorderBottom containerBorderTop">



              POI is the certificate obtained by MyetherID when you store your identity data on the blockchain. While it encrypts the provided data it also runs a
              validation on the certificate being the stored attributes. These validations are stored and can be accessed by wallets from services to which if
              you’ve given access permissions upon a payment of a BLID token fee.

            </p>
          </dd>
          <dt>
            <button aria-expanded="false" aria-controls="faq8_desc">
              How does MyEtherID store my ID data on the Blockchain?
            </button>
          </dt>
          <dd>
            <p id="faq8_desc" className="desc containerBorderBottom containerBorderTop">



              WE STILL NEED TO DEFINE THIS

            </p>
          </dd>
          <dt>
            <button aria-expanded="false" aria-controls="faq9_desc">
              Why is BlockID Protocol running on Ethereum Blockchain?
            </button>
          </dt>
          <dd>
            <p id="faq9_desc" className="desc containerBorderBottom containerBorderTop">



              The Ethereum Blockchain is currently the only viable solution to create, store and trade smart contracts. BlockID’s protocol is focused on one specific
              potential usage that comes from smart contracts, by storing and encrypting certified ID attributes in one and by associating it with it’s user’s Ethereum
              Wallet. Ethereum provides the solid base for any kind of smart contracts to use their protocol and internet users will use it as a gateway to unlock a
              series of different private, safe and efficient transactions online. BlockID allows you to associate your real life certified ID to your wallet
              whenever you need to prove your identity on the blockchain.

            </p>
          </dd>
          <dt>
            <button aria-expanded="false" aria-controls="faq10_desc">
              Why do i need an Ethereum wallet?
            </button>
          </dt>
          <dd>
            <p id="faq10_desc" className="desc containerBorderBottom containerBorderTop">



              The Ethereum wallet allows you to access any smart contract features on the blockchain. It is your Ethereum Blockchain Identity with the ability to send
              and receive any Ethereum token such as BLID. Your Ethereum wallet is only accessible and manageable with the correspondent private key generated upon the
              creation of your wallet. You can create an Ethereum wallet safely and for free in www.myetherwallet.com.

            </p>
          </dd>
          <dt>
            <button aria-expanded="false" aria-controls="faq11_desc">
              What is MyEtherWallet?
            </button>
          </dt>
          <dd>
            <p id="faq11_desc" className="desc containerBorderBottom containerBorderTop">



              MyEtherWallet is a web based app running a full Ethereum node that gives full control and responsibility over your Ethereum wallet. It does not allow you
              to create an account or to store your Ether in any server, it simply allows you create a wallet, which is yours to store and keep safe, and to broadcast
              your transactions on the blockchain.

            </p>
          </dd>
          <dt>
            <button aria-expanded="false" aria-controls="faq12_desc">
              What is Metamask?
            </button>
          </dt>
          <dd>
            <p id="faq12_desc" className="desc containerBorderBottom containerBorderTop">



              MetaMask is a bridge that allows you to run Ethereum dApps and use your Ethereum wallet right in your browser without running a full Ethereum node.
              MetaMask includes a secure identity vault, providing a user interface to manage his wallet on different sites and sign blockchain transactions.
              You can install the MetaMask add-on in Chrome, Firefox, Opera, and the new Brave browser. see here

            </p>
          </dd>
          <dt>
            <button aria-expanded="false" aria-controls="faq13_desc">
              What is ID Data?
            </button>
          </dt>
          <dd>
            <p id="faq13_desc" className="desc containerBorderBottom containerBorderTop">



              ID Data the output ImportID produces after reading the attributes in your Citizen Card. It is a text generated within the desktop app that compiles
              that information in a format readable by MyEtherID when storing your identity on the blockchain. It must be copied from ImportID and pasted in
              MyEtherID in Store Identity page.

            </p>
          </dd>
          <dt>
            <button aria-expanded="false" aria-controls="faq14_desc">
              What happens if i lose my keys?
            </button>
          </dt>
          <dd>
            <p id="faq14_desc" className="desc containerBorderBottom containerBorderTop">



              There is no possible recovery to your Ethereum wallet private key and metamask recovery. keywords. They are not stored anywhere and you are their only owner.

            </p>
          </dd>
          <dt>
            <button aria-expanded="false" aria-controls="faq15_desc">
             Is it safe to store my ID attributes on the Blockchain?
            </button>
          </dt>
          <dd>
            <p id="faq15_desc" className="desc containerBorderBottom containerBorderTop">



              Completely. Your ID attributes are actually not stored anywhere and no one but yourself can have access or manage them. What’s stored in the blockchain is
              an encryption (hash) of those attributes. This encryption is made with your Ethereum wallet private key, using metamask and decryption can only be made with
              the same key.

            </p>
          </dd>
          <dt>
            <button aria-expanded="false" aria-controls="faq16_desc">
              How can i trade my attributes and keep my privacy?
            </button>
          </dt>
          <dd>
            <p id="faq16_desc" className="desc containerBorderBottom containerBorderTop">



              You are the sole person able to access your decrypted ID attributes either in the physical world through your Identity Document or in the blockchain,
              through MyEtherID but with your private key and metamask connection only. Only an hash (encryption) of your attributes is stored in the blockchain.
              Only your private key can decrypt them and nobody else has access to it.
              You can, however trade your decrypted attributes with entities you trust. Some websites are running BlockID’s compatible dApps that request you to provide
              your ID Smart Contract Address and to connect your metamask to decrypt your data, so you can enjoy an instant registration application or kyc approval.
              Make sure you trust the sources you are trusting  your data to.

            </p>
          </dd>
          <dt>
            <button aria-expanded="false" aria-controls="faq17_desc">
              Can i check other user’s ID data and transactions?
            </button>
          </dt>
          <dd>
            <p id="faq17_desc" className="desc containerBorderBottom containerBorderTop">



              All transactions that occur in the blockchain are registered and can be checked in etherscan.io or similar services. It’s not possible to trace user’s off
              chain identity since the only way to decrypt ID smart contracts is with its own private key and metamask linking. However, smart contract addresses are exposed
              in the context of transactions between themselves.

            </p>
          </dd>
          <dt>
            <button aria-expanded="false" aria-controls="faq18_desc">
              Am i always in control of my data?
            </button>
          </dt>
          <dd>
            <p id="faq18_desc" className="desc containerBorderBottom containerBorderTop">



              Yes. No service or app running BlockID’s protocol has access to your information or data. ImportID is the only app in touch with that raw data but it is an
              open source application that runs locally on your desktop. From that point on, MyEtherID only deals and stores the encryption of that data, generating it
              from your own private key. It means that only your Ethereum wallet private key, through metamask has the ability to access and manage your ID raw data.

            </p>
          </dd>
        </dl>
      </main>
    );
  }
}

export default Help;
