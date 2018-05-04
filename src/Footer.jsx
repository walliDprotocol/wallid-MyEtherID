import React from 'react';

function Footer(/*props*/) {
  return (
    <footer className="footer">
      <div className="row justify-content-md-center">
        <div className="col">
          <a href="/">
            <img className="logoHeader" src={require('./img/myetherid-logo.svg')} alt="MyEther ID Logo" />
          </a>
          <p>
            Free, open-source, client-side interface to encrypt and store id attributes on the blockchain.
          </p>
          <a href="https://www.myetherid.com/" target="_blank rel=noopener">Disclaimer</a>
          <br />
          <a href="https://www.myetherid.com/" target="_blank rel=noopener">Latest Block#: 4t6i31198</a>
          <br />
          <a href="https://www.myetherid.com/" target="_blank rel=noopener">MyEtherID @ 2018</a>
        </div>
        <div className="col">
          <p>
            Feel free to donate MyEtherID:
          </p>
          <p>
            <a href="https://www.myetherid.com/" target="_blank rel=noopener"> ETH: 0x012345678901234567890123</a>
            <br />
            <a href="https://www.myetherid.com/" target="_blank rel=noopener"> BLID: 012345678901234567890123</a>
          </p>
          <p>
            Downloads:
          </p>
          <p>
            <a href="https://www.myetherid.com/" target="_blank rel=noopener">ImportID</a>
            <br />
            <a href="https://www.myetherid.com/" target="_blank rel=noopener">BlockID ICO</a>
          </p>
        </div>
        <div className="col">
          <a href="https://www.myetherid.com/" target="_blank rel=noopener"> Block-id.io</a>
          <br />
          <a href="https://www.myetherid.com/" target="_blank rel=noopener"> MyEtherId.io</a>
          <br />
          <a href="https://www.myetherid.com/" target="_blank rel=noopener"> BlockId Team</a>
          <br />
          <a href="https://www.myetherid.com/" target="_blank rel=noopener"> Email support: support@myetherid.io</a>
          <br />
          <a href="https://www.myetherid.com/" target="_blank rel=noopener"> GitHub: MyEtherId</a>
          <br />
          <a href="https://www.myetherid.com/" target="_blank rel=noopener"> GitHub: ImportID</a>
          <br />
          <a href="https://www.myetherid.com/" target="_blank rel=noopener"> GitHub: VerifyID</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
