import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Web3 from 'web3'
import BlockIdContract from './blockid/BlockId.js';
var CryptoJS = require("crypto-js");


window.addEventListener('reload', function () {

  if(typeof web3 !== 'undefined'){
    console.log("Using web3 detected from external source like Metamask")
    window.web3 = new Web3(window.web3.currentProvider)
  }else{
    console.log("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
    alert('No web3? You should consider trying MetaMask!')
  }

});

var products = [
{
  Entity: "Portuguese Republic",
  IDCertificate: "x 509",
  Card: "Cartão de Cidadão",
  Attributes: "Identity, Address",
  SCaddress: "9h8gj79x9h8gj79x",
  SCDate: " 12 Jan 18"
}
];

class Browse extends Component {

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
      <div>
        <h2>Browse your identities</h2>
        <br />

        <br />
        <BootstrapTable
          data={products}
          hover
          condensed
          pagination
          expandableRow={ this.isExpandableRow }
          expandComponent={ this.expandComponent }
          >
          <TableHeaderColumn dataField="Entity" width='20%' isKey={true}>Entity</TableHeaderColumn>
          <TableHeaderColumn dataField="IDCertificate" width='10%'>ID Certificate</TableHeaderColumn>
          <TableHeaderColumn dataField="Card" width='10%'>Card</TableHeaderColumn>
          <TableHeaderColumn dataField="Attributes" width='20%'>Attributes</TableHeaderColumn>
          <TableHeaderColumn dataField="SCaddress" width='20%'>SC Address</TableHeaderColumn>
          <TableHeaderColumn dataField="SCDate" width='20%'>SC Date</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Browse;

class BSTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      ContractAddress : '0x82209352470b2f22f5a6874790114d5651a75285',
      ContractInstance : null,
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    if(window.web3){
      const MyContract = window.web3.eth.contract(BlockIdContract.abi)
      this.state.ContractInstance = MyContract.at(this.state.ContractAddress)

      this.state.ContractInstance.countItemList( (err, data) => {
        console.log('Count items :  ', data);
        console.log('total items #', data.c[0] );
      });
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    this.getInfo()
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
    this.state.ContractInstance.getInfo( (err, data) => {
      console.log('get Info Result ', data);
      var loadData = [];
      var dataAttribute = [];

      try {
        var bytes =  CryptoJS.AES.decrypt(this.hex2a(data[1]) ,this.state.password);
        var ret_1 = bytes.toString(CryptoJS.enc.Utf8);
        var dataAttribute = JSON.parse(ret_1);
        //console.log(dataAttribute);
        //console.log(Object.keys(dataAttribute));
        for(var i in dataAttribute){
          //console.log(i);
          //console.log(dataAttribute[i]);
          loadData.push({ 'item' : i, 'value' : dataAttribute[i]})
        }

        bytes =  CryptoJS.AES.decrypt(this.hex2a(data[2]),this.state.password);
        var ret_2 = bytes.toString(CryptoJS.enc.Utf8);
        dataAttribute = JSON.parse(ret_2)
        //console.log(dataAttribute);
        //console.log(Object.keys(dataAttribute));
        for(i in dataAttribute){
          //console.log(i);
          //console.log(dataAttribute[i]);
          loadData.push({ 'item' : i, 'value' : dataAttribute[i]})
        }
        this.state.data = loadData
        this.forceUpdate()

      }
      catch(err) {
          console.log("error",err);
          alert("Decrypt fail! Try Again!")
      }

    });
  }

  render() {
    if (this.state.data) {
      return (
        <BootstrapTable
          data={this.state.data}
          hover
          condensed
          >
          <TableHeaderColumn dataField="item" width='20%' isKey={true}>Item</TableHeaderColumn>
          <TableHeaderColumn dataField="value" width='10%'>Value</TableHeaderColumn>
        </BootstrapTable>
      );
      } else {
        return (

            <div>
              <form onSubmit={this.handleSubmit} >
                <div class="form-group">
                  <label>
                    BlockID Encryption Password
                  </label>
                  <p>
                    <a href="/">
                      What is BlockID Encrytion Password?
                    </a>
                  </p>
                  <div class="row ">
                    <div class="col-md-6">
                      <input
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        class="form-control"
                        placeholder="Enter the password to decrypt your certified ID attributes"
                        required />
                    </div>
                  </div>
                </div>
                <input type="submit" value="Submit" />
                </form>
            </div>
      );
      }
    }
  }
