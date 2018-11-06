import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Web3 from 'web3'
import BlockIdContract from './blockid/BlockId.js';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';
import Switch from "react-switch";
var CryptoJS = require("crypto-js");

const SweetAlert = withSwalInstance(swal);
const PASSWORD = '20THIS_WILL_USE_METAMASK_SECURITY18';

window.addEventListener('reload', function () {

  if(typeof web3 !== 'undefined'){
    console.log("Using web3 detected from external source like MetaMask")
    window.web3 = new Web3(window.web3.currentProvider)
  }else{
    console.log("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to MetaMask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
    alert('No web3? You should consider trying MetaMask!')
  }

});

var products = [
{
  Entity: "Portuguese Republic",
  IDCertificate: "x509",
  Card: "Cartão de Cidadão",
  Attributes: "Identity, Address",
  SCaddress: "9h8gj79x9h8gj79x",
  SCDate: "12 Jan 18"
}
];

class View extends Component {

  isExpandableRow(row) {
    return true;
  }

  expandComponent(row) {
    return (
      <BSTable data={ row.expand } />
    );
  }

  render() {
    return (
      <main role="main">
        <div className="container">
          <div className="row justify-content-md-center pb-3">
            <div className="col text-center">
                  <h2 className="pb-2">View your identities</h2>
                  <h3 className="orange">
                    Check Your ID documents within WalliD’s smart contract
                  </h3>
              </div>
          </div>
          <div className="jumbotron">
            <div className="row text-center justify-content-md-center pt-4 pb-3">
              <div className="col-md-10">
                <p>Make sure you are logged in MetaMask to ensure your safety accessing your Ethereum wallet.
                <br />
                Remember decryption is only possible your with your wallet private key through MetaMask association and we don’t have any access to your data</p>
              </div>
            </div>
            <br />
            <br />
            <div className="bootstrapTable">
              <BootstrapTable
                data={products}
                bordered={ false }
                hover
                responsive
                pagination
                expandableRow={ this.isExpandableRow }
                expandComponent={ this.expandComponent }
                >

                <TableHeaderColumn dataField="Entity" isKey={true}>Entity</TableHeaderColumn>
                <TableHeaderColumn dataField="IDCertificate">ID Certificate</TableHeaderColumn>
                <TableHeaderColumn dataField="Card">Card</TableHeaderColumn>
                <TableHeaderColumn dataField="Attributes">Attributes</TableHeaderColumn>
                <TableHeaderColumn dataField="SCaddress">SC Address</TableHeaderColumn>
                <TableHeaderColumn dataField="SCDate">SC Date</TableHeaderColumn>
              </BootstrapTable>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default View;

class BSTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupLogout: false,
      popupError: false,
      data: '',
      ContractAddress : '0x787e5fc4773cad0c45f287bf00daca402845b1b7',
      ContractInstance : null,
      password: PASSWORD,
      isManualPassword : true,
      chiperPassword  : PASSWORD,
      idt: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeIdt = this.handleChangeIdt.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitClose = this.handleSubmitClose.bind(this);
    this.handleUsePassword = this.handleUsePassword.bind(this);

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

  componentDidMount() {
    delete this.state.data;
   }

   componentWillUnmount() {
     delete this.state.data;
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

 handleUsePassword(event){
   console.log('LOG ', this.state.isManualPassword);
   this.setState({ isManualPassword : event });
 }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleChangeIdt(event) {
    console.log("handleChangeIdt");
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    this.getInfo()
    event.preventDefault();
  }

  handleSubmitClose(event) {
    delete this.state.data;
    this.forceUpdate()
    event.preventDefault();
  }

  hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 2; i < hex.length; i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
  }

  getInfo()
  {
    // TODO: OPID
    var opid = "123456789";
    console.log(this.state.idt);
    this.state.ContractInstance.getIdtData( this.state.idt, opid,(err, data) => {
      console.log('get Info Result ', data);
      var loadData = [];
      var identifyId = {}

      try {
        var password = this.state.isManualPassword ? this.state.chiperPassword : this.state.password;
        console.log('password for encrpt (1) ', password);
        var bytes =  CryptoJS.AES.decrypt(this.hex2a(data[0]) ,password);
        var ret_1 = bytes.toString(CryptoJS.enc.Utf8);
        identifyId = JSON.parse(ret_1);

        //console.log('Identify ', identifyId);
        //console.log(Object.keys(dataAttribute));

        for(var i in identifyId.identityAttributes){
          //console.log(i);
          //console.log(dataAttribute[i]);
          loadData.push({ 'item' : i, 'value' : identifyId.identityAttributes[i]})
        }

        for( i in identifyId.addressAttributes){
          //console.log(i);
          //console.log(dataAttribute[i]);
          loadData.push({ 'item' : i, 'value' : identifyId.addressAttributes[i]})
        }

        this.setState({ data: loadData })
        this.forceUpdate()

      }
      catch(err) {
          //console.log("error",err);
          this.setState({ popupError: true })
          this.forceUpdate()
      }

    });
  }


  render() {
    if (this.state.data) {
      return (
        <div className="innerBootstrapTable table-responsive">
          <form onSubmit={this.handleSubmitClose} className="tableForm" >
            <div className="form-group">
          <input
            type="submit"
            value="Back"
            className="btn btn-lg btnStyle"/>
          </div>
          </form>

          <BootstrapTable
            data={this.state.data}
            bordered={ false }
            hover
            responsive
            >
            <TableHeaderColumn dataField="item" width='50%' isKey={true}>Item</TableHeaderColumn>
            <TableHeaderColumn dataField="value" width='50%'>Value</TableHeaderColumn>
          </BootstrapTable>
        </div>
      );
      } else {
        if(this.state.isUserLogged){
          return (
              <div>
                <SweetAlert
                  show={this.state.popupError}
                  title="Decrypt fail!"
                  text="Decrypt fail! Please try Again!"
                  confirmButtonColor = "#17a4b1"
                  onConfirm={() => this.setState({ popupError: false })}
                  />
                  <form>
                    <div class="form-group">
                    </div>
                  </form>
                <form onSubmit={this.handleSubmit} className="tableForm">
                  <div className="form-group">
                    <label className="row text-center justify-content-md-center pt-4 pb-3">
                      Select StoreID Provider:
                    </label>
                    <select class="form-control" required>
                      <option disabled value="" selected hidden>Select an valid StoreID Provider</option>
                      <option value="storeid.caixamagica.pt">CaixaMagica@StoreID</option>
                    </select>
                    <label className="row text-center justify-content-md-center pt-4 pb-3">
                      Select identity type:
                    </label>
                    <select class="form-control"
                      required
                      name="idt"
                      onChange={this.handleChangeIdt}>
                      <option disabled value="" selected hidden>Select an valid identity</option>
                      <option value="CC_PT">Cartão de Cidadão - República Portuguesa</option>
                      <option value="CC_PT_TST">Cartão de Cidadão TST - República Portuguesa</option>
                    </select>
                    <br />
                    <label>
                      WalliD Encryption Password
                    </label>
                    <p>
                      <a href="/">
                        What is WalliD Encrytion Password?
                      </a>
                    </p>
                    <label htmlFor="material-switch">
                    <Switch
                      onChange={this.handleUsePassword}
                      checked={this.state.isManualPassword}
                      onColor="#fff"
                      onHandleColor="#f89722"
                      handleDiameter={34}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                      activeBoxShadow="0px 3px 7px 0 rgba(9, 44, 51, 0.35)"
                      height={34}
                      width={60}
                      className="react-switch"
                      id="material-switch"
                    />
                  </label>
                    <input
                      hidden={ !this.state.isManualPassword ?  true : false }
                      type="password"
                      id="chiperPassword"
                      name="chiperPassword"
                      onChange={this.handleChange}
                      className="form-control inputClass"
                      placeholder="Enter the password to decrypt your certified ID attributes"
                      required={this.state.isManualPassword ?  true : false }
                      />
                  </div>
                  <input type="submit" value="View ID" className="btn btn-lg btnStyle" />
                  </form>
              </div>
        );
        }else{
          return (
              <div>
                <SweetAlert
                  show={this.state.popupLogout}
                  title="User logged out?"
                  text="Please login your account at MetaMask and try again!"
                  confirmButtonColor = "#17a4b1"
                  />
                <p className="tableParagraph">User logged out? Please login your account at MetaMask and try again!</p>
                <p className="tableParagraph">
                  <a href="https://metamask.io/">
                  Download MetaMask here
                  </a>
                </p>
                <p className="tableParagraph">
                  <a href="https://metamask.io/">
                    What is MetaMask?
                  </a>
                </p>
              </div>
          );
        }
       }
    }
  }
