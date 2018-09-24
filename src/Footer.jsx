import React from 'react';

function Footer(/*props*/) {
  return (

    <footer class="p-5 bg-black">
      <div class="text-center">
          <img src={require('./img/myetherid-logo.png')} class="img-fluid footerImg" height="35" width="167" alt="Logo Wallid"/>
          <p class="mt-3 pb-3">
            Free, open-source, client-side interface to encrypt and store ID documents on the blockchain
          </p>
          <button type="button" class="btn btn-block btn-lg btnStyle mt-3">Contact Us</button>
      </div>

      <div class="row">
          <div class="col-sm-12 col-md-3 col-lg-3 mt-5">
              <p class="mediumSize">Join the conversation</p>
              <div class="footerContent row">
                  <div class="col-3 mt-3">
                      <div>
                          <a href="https://github.com/wallid-project" target="_blank rel=noopener">
                              <img src={require('./img/github.png')} class="img-fluid socialMedia mt-2" alt="Github"/>
                          </a>
                      </div>
                  </div>
                  <div class="col-3 mt-3">
                      <div>
                          <a href="" target="_blank rel=noopener">
                              <img src={require('./img/twitter.png')} class="img-fluid socialMedia mt-2" alt="Twitter"/>
                          </a>
                      </div>
                  </div>
                  <div class="col-3 mt-3">
                      <div>
                          <a href="" target="_blank rel=noopener">
                              <img src={require('./img/medium.png')} class="img-fluid socialMedia mt-2" alt="Medium"/>
                          </a>
                      </div>
                  </div>
                  <div class="col-3 mt-3">
                      <div>
                          <a href="" target="_blank rel=noopener">
                              <img src={require('./img/telegram.png')} class="img-fluid socialMedia mt-2" alt="Telegram"/>
                          </a>
                      </div>
                  </div>
              </div>
          </div>

          <div class="col-sm-12 col-md-4 col-lg-3 mt-5">
              <p class="mediumSize">Feel free to donate to MyEtherID</p>
              <div class="footerContent mt-3">
                <p class="mediumSize"><a href="https://www.MyEtheriD.io/" target="_blank rel=noopener">ETH: 0x012345678901234567890123</a></p>
                <p class="mediumSize"><a href="https://www.MyEtheriD.io/" target="_blank rel=noopener">WAL: 0x012345678901234567890123</a></p>
              </div>
          </div>

          <div class="col-sm-12 col-md-2 col-lg-2 mt-5">
              <p class="mediumSize">More about MyEtherID</p>
              <div class="footerContent mt-3">
                <p class="mediumSize"><a href="https://www.MyEtheriD.io/" target="_blank rel=noopener">Disclaimer</a></p>
                <p class="mediumSize"><a href="https://www.MyEtheriD.io/" target="_blank rel=noopener">Latest Block#: 4t6i31198</a></p>
              </div>
          </div>

          <div class="col-sm-12 col-md-1 col-lg-2 mt-5">
              <p class="mediumSize">Github</p>
              <div class="footerContent mt-3">
                <p class="mediumSize"><a href="https://github.com/wallid-project" target="_blank rel=noopener">WallID project</a></p>
              </div>
          </div>

          <div class="col-sm-12 col-md-2 col-lg-2 mt-5">
              <p class="mediumSize">Poweder by</p>
              <div class="footerContent mt-3">
                <a href="/">
                  <img className="logoHeader" src={require('./img/wallid-logo.png')} alt="WalliD Logo" />
                </a>
                <p class="mediumSize mt-3">WallID team</p>
              </div>
          </div>
      </div>
  </footer>
  );
}

export default Footer;
