import React from "react";
import Web3 from 'web3'
import BlockIdContract from '../blockid/BlockId.js';
import { Link } from 'react-router-dom';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';

const SweetAlert = withSwalInstance(swal);

var CryptoJS = require("crypto-js");
var Spinner = require('react-spinkit');

const state = {
  STATE_TRANSACTION_PROCESSING: '1',
  STATE_TRANSACTION_CONFIRMED: '2'
};

window.addEventListener('reload', function () {
  if(typeof web3 !== 'undefined'){
    console.log("Using web3 detected from external source like MetaMask")
    window.web3 = new Web3(window.web3.currentProvider)
  }else{
    console.log("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to MetaMask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
  }
});

class ImportForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupLogout: false,
      popupError: false,
      popupCancel: false,
      timeoutID: '',
      walletAddress: '',
      password: '20THIS_WILL_USE_METAMASK_SECURITY18',
      passwordCheck: '20THIS_WILL_USE_METAMASK_SECURITY18',
      data: '',
      ContractAddress : '0x0bdafb4db2b71f70530d5b2070a3468052c1adb1',
      ContractInstance : null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    if(window.web3){
      const MyContract = window.web3.eth.contract(BlockIdContract.abi)
      this.state.ContractInstance = MyContract.at(this.state.ContractAddress)

      // this.state.ContractInstance.countItemList( (err, data) => {
      //   console.log('Count items :  ', data);
      //   console.log('total items #', data.c[0] );
      // });
      this.checkMetamaskUser()
    }
  }
  checkMetamaskUser() {
    var self = this

    window.web3.eth.getAccounts(function(err, accounts){

      if (err != null) {
        console.error("An error occurred: "+err);
        self.state.isUserLogged = 0;
      }
      else if (accounts.length === 0) {
        console.log("User is not logged in to MetaMask");
        self.state.isUserLogged = 0;
        self.state.popupLogout = true;
      }
      else {
        console.log("User is logged in to MetaMask");
        self.state.isUserLogged = 1;
      }
      self.forceUpdate()
    });
  }

  timer(txID) {
    var self = this
    window.web3.eth.getTransaction(txID, (err, transaction) => {
      console.log("Transaction: " + transaction);
      console.log(transaction);
      if (transaction.blockNumber == null)
      {
        console.log('Not yet! ...');
      }
      else
      {
        console.log('Last Transaction was confirmed!');
        clearInterval(self.state.timeoutID);
        self.state.addinfoSuccess = state['STATE_TRANSACTION_CONFIRMED'];
        self.forceUpdate()
      }
    }
  );
}

hex2a(hexx) {
  var hex = hexx.toString();//force conversion
  var str = '';
  for (var i = 2; i < hex.length; i += 2)
  str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}

handleChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  });
}

handleErrors(response) {
  console.log("handleErrors");
  if (!response.ok) {
    console.log("response",response);
    alert("ID Data format error. Please copy all data from ImportID")
    throw Error(response.statusText);
  }
  return response;
}
handleSucess(response) {
  console.log("handleSucess");
  console.log('WalletAddress :' + this.state.walletAddress);
  //console.log('Password : ' + this.state.password);
  //console.log('Password Check : ' + this.state.passwordCheck);
  //console.log('Data :' + this.state.data);

  var obj = {};
  try {
    obj = JSON.parse(this.state.data);
    var storeIdProviderWa = obj.dataID.storeIDProvider.wa;
    var storeIdProviderName = obj.dataID.storeIDProvider.name;
    var storeIdProviderUrl = obj.dataID.storeIDProvider.url;

    var idt = obj.dataID.data.idt;
    var idtName = obj.dataID.data.idtName;
    console.log('storeId Provider WA :' + storeIdProviderWa);
    console.log('idt :' + idt);

    var identityId = CryptoJS.AES.encrypt(JSON.stringify( obj.dataID.data.identityID), this.state.password).toString();

    console.log('Encrypt identity ID ', identityId  );

    var self = this
    this.state.ContractInstance.addInfo( identityId, idt, idtName, storeIdProviderWa, storeIdProviderName, storeIdProviderUrl, (err, data) => {
      console.log('add info result is ', data);
      if(data){
        self.state.addinfoSuccess = state['STATE_TRANSACTION_PROCESSING'];
        self.state.timeoutID = setInterval(self.timer.bind(self), 5000, data);
        self.forceUpdate()
      }else{
        self.state.addinfoSuccess = state['STATE_0'];
        self.state.popupCancel = true
        self.forceUpdate()
      }
    });
  }
  catch(err) {
    this.setState({ popupError: true })
    this.forceUpdate()
  }

  return;
}

handleSubmit(event) {
  console.log("handleSubmit");
  var obj = JSON.parse(this.state.data);
  delete obj.dataID.data.identityID;

  var storeIdProviderUrl = obj.dataID.storeIDProvider.url;

  if(this.state.password === this.state.passwordCheck){
//     this.handleSucess()
      fetch(storeIdProviderUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
      .then(this.handleErrors)
      .then(response => this.handleSucess(response) )
      .catch(error => {
        console.log(error)
        alert("Store Wallid Fail")
      }
    );
  }else{
    alert("Password and comfirm password is not the same")
  }
  event.preventDefault();
}

/* run after component render */
componentDidMount(){

}

/* run before component render */
componentWillMount(){

}

render() {
  if(window.web3){
    if(this.state.isUserLogged){
      if(this.state.addinfoSuccess === state['STATE_TRANSACTION_CONFIRMED']){
        return (
          <form onSubmit={this.handleSubmit} >
            <p>
              ID succesfully encrypted and stored on the blockchain. You can check it
              <Link to ='/view' > here.</Link>
            </p>
          </form>
        );
      }else if(this.state.addinfoSuccess === state['STATE_TRANSACTION_PROCESSING']){
        return (
          <div align="center">
            <p>
              Storing on the blockchain. Please wait....
            </p>
            <Spinner name="wandering-cubes" color="blue"/>
          </div>
        );
      }else{
        return (
          <div>
            <SweetAlert
              show={this.state.popupError}
              title="ID Data Error"
              text="Please copy all data from ImportID"
              confirmButtonColor = "#0FA3B1"
              onConfirm={() => this.setState({ popupError: false })}
              />
            <SweetAlert
              show={this.state.popupCancel}
              title="Error"
              text="Operation canceled. Please try again!"
              confirmButtonColor = "#0FA3B1"
              onConfirm={() => this.setState({ popupCancel: false })}
              />
            <form onSubmit={this.handleSubmit} >
              <div className="form-group">
                <label>
                  Select your identity type:
                </label>
                <select className="form-control" required>
                  <option value="grapefruit">
                    Cartão do Cidadão - República Portuguesa
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label>
                  ID Data:
                </label>
                <textarea
                  id="importData"
                  name="data"
                  onChange={this.handleChange}
                  className="form-control"
                  rows="5"
                  placeholder="Paste your ID Data provided by BlockID’s Import ID App"
                  required>
                </textarea>
              </div>
              <p>
                To submit connect with MetaMask
              </p>
              <div className="form-group">
                <input
                  type="submit"
                  value="Connect with MetaMask" />
              </div>
            </form>
          </div>
        );
      }
    }else{
      return (
        <div>
          <SweetAlert
            show={this.state.popupLogout}
            title="User logged out?"
            text="Please login your account at MetaMask and try again!"
            confirmButtonColor = "#0FA3B1"
            />
          <form onSubmit={this.handleSubmit} >
            <div className="form-group">
              <label>
                Select identity type:
              </label>
              <select className="form-control" required>
                <option value="grapefruit">
                  Cartão do Cidadão - República Portuguesa
                </option>
              </select>
            </div>
            <p>
              Login to your MetaMask to associate your ether wallet and refresh the page.
            </p>
            <p>
              <a href="https://metamask.io/">
                Download MetaMask here
              </a>
            </p>
            <p>
              <a href="https://metamask.io/">
                What is MetaMask?
              </a>
            </p>
          </form>
        </div>
      );
    }
  }else {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label>
              Select identity type:
            </label>
            <select className="form-control" required>
              <option value="grapefruit">
                Cartão do Cidadão - República Portuguesa
              </option>
            </select>
          </div>
          <p>
            Don’t have MetaMask plug in installed?
          </p>
          <p>
            <a href="https://metamask.io/">
              Download MetaMask here
            </a>
          </p>
          <p>
            <a href="https://metamask.io/">
              What is MetaMask?
            </a>
          </p>
        </form>
      </div>
    );
  }
}
}

export default ImportForm;
