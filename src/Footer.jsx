import React from 'react';

function Footer(/*props*/) {
  return (
    <footer class="page-footer font-small footerColor pt-4 mt-4">

      <div class="container text-center text-md-left">
        <div class="row">

          <div class="col-md-4">
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


          <div class="col-md-4 mx-auto">
            <p>
              Feel free to donate to MyEtherID:
            </p>
            <p>
              <a href="https://www.myetherid.com/" target="_blank rel=noopener">ETH: 0x012345678901234567890123</a>
              <br />
              <a href="https://www.myetherid.com/" target="_blank rel=noopener">WAL: 0x012345678901234567890123</a>
            </p>
            <p>
              Downloads:
            </p>
            <p>
              <a href="https://www.myetherid.com/" target="_blank rel=noopener">ImportID</a>
              <br />
            </p>
          </div>


          <div class="col-md-4 mx-auto">
            <a href="https://www.wallid.io" target="_blank rel=noopener">wallid.io</a>
            <br />
            <a href="https://www.myetherid.com/" target="_blank rel=noopener">MyEtherId.io</a>
            <br />
            <a href="https://www.myetherid.com/" target="_blank rel=noopener">WalliD Team</a>
            <br />
            Email support: <a href="https://www.myetherid.com/" target="_blank rel=noopener">support@myetherid.io</a>
            <br />
            GitHub: <a href="https://github.com/wallid-project" target="_blank rel=noopener"> wallid-project</a>
          </div>
        </div>
      </div>


      <div class="text-center">
        <ul class="list-unstyled list-inline">
          <li class="list-inline-item">
            <a class="btn-floating btn-sm btn-fb mx-1">
              <i class="fa fa-facebook"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-sm btn-tw mx-1">
              <i class="fa fa-twitter"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-sm btn-gplus mx-1">
              <i class="fa fa-google-plus"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-sm btn-li mx-1">
              <i class="fa fa-linkedin"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-sm btn-dribbble mx-1">
              <i class="fa fa-dribbble"> </i>
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-copyright py-3 text-center">
        © 2018 Copyright:
        <a href="/"> MyEtherID.com </a>
      </div>

    </footer>
  );
}

export default Footer;
