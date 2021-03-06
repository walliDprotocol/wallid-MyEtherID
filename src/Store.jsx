import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import ImportForm from './components/ImportForm';

class Store extends Component {
render() {
return (
<main role="main">
    <div className="container">
        <div className="row text-left  pb-4 containerBorderBottom">
            <div className="text-left">
                <h2 className="pb-2">Store your Identity on the Blockchain</h2>
                <h3 className="text-blue  align-left">
                    Encrypt you ID documents in you Ethereum Wallet
                </h3>
            </div>
        </div>

        <div class="jumbotron">
            <div className="pt-3 pb-1 importForm">
                <ImportForm />
            </div>
        </div>

        <div class="jumbotron jumbotron-dark">
            <div className="row text-center pt-3 justify-content-md-center containerBorderBottom bottomBorder">
                <div className="col-md-11">
                    <p className=""> 
                        <div>You need to extract your attributes from your Identity Document and locally generate your ID
                        data from
                            </div>
                            <div>
                            WalliD’s ImportID desktop app. Once you generate it on the app, copy it to respective ID Data
                            section above.
                            </div>
                    </p>
                </div>
                <div className="row col-md-8 ">
                    <div className="col-md-4">
                        <Link to="/help#top" className="link ">
                        <p className="text-blue strong">
                            What is WalliD?
                        </p></Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/help#top" className="link text-blue">
                        <p className="text-blue strong">
                            What is ImportID
                        </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/help#top" className="link text-blue">
                        <p className="text-blue strong">
                        What is my ID Data?</p>
                      </Link>
                    </div>
                </div>
            </div>

            <div className="row containerBorderBottom mt-3">
                <div className="row text-center pt-3 justify-content-md-center containerBorderBottom">
                    <div className="col-md-11">
                        <p>If you haven’t installed Import ID on your computer, you can download it for free.</p>
                    </div>
                    <div className="row col-md-12">
                        <div className="col-md-4">
                            <a href="https://github.com/walliDprotocol/wallid-ImportID/releases/download/v0.0.1/ImportID.msi">
                                <button type="button" class="btn btn-block btn-lg btnStyle">Download here
                                    <img src={require('./img/microsoft.png')} height="50" width="50" hspace="20" alt="Microsoft" />
                                </button>
                            </a>

                        </div>
                        <div className="col-md-4">
                            <a href="https://github.com/walliDprotocol/wallid-ImportID/releases/download/v0.0.1/ImportID.pkg">
                                <button type="button" class="btn btn-block btn-lg btnStyle">Download here
                                    <img src={require('./img/apple.png')} height="50" width="50" hspace="20" alt="Apple" />
                                </button>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="">
                                <button type="button" class="btn btn-block btn-lg btnStyle" disabled>Download here
                                    <img src={require('./img/linux.png')} height="50" width="50" hspace="20" alt="Linux" />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>


    <section className="main-bottom">
        <div className="container">
            <div className="row containerNoBorder mt-4">
                <div className="col">
                    <h3>How to Protect Yourself From Loss</h3>
                    <p className="text-center">If you lose your private key or MetaMask recovery keywords they are gone
                        forever. Don't lose them.</p>
                    <div className="container">
                        <ul>
                            <li>Make a backup of your keys. Do NOT just store them on your computer. Print them out on
                                a
                                piece
                                of paper or save them to a USB drive.</li>
                            <li>Store this paper or USB drive in a different physical location. A backup is not useful
                                if
                                it is
                                destroyed by a fire or flood along with your laptop.</li>
                            <li>Do not store your keys inn Dropbox, Google Drive, or other cloud storage. If that
                                account
                                is
                                compromised, your funds will be stolen.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </section>



</main>
);
}
}

export default Store;