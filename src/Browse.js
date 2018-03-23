import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Web3 from 'web3'
import BlockIdContract from './blockid/BlockId.js'

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
        <div class="form-group">
          <label>Paste an Ether wallet public address below to check its owner certified identities</label>
          <input type="password" name="password" onChange={this.handleChange} class="form-control" placeholder="Ether wallet public address" required />
        </div>
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
      ContractInstance : null
    };
    if(window.web3){
      const MyContract = window.web3.eth.contract(BlockIdContract.abi)
      this.state.ContractInstance = MyContract.at(this.state.ContractAddress)

      this.state.ContractInstance.countItemList( (err, data) => {
        console.log('Count items :  ', data);
        console.log('total items #', data.c[0] );
      });

      this.getInfo();
    }
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
      var dataAttribute = JSON.parse(this.hex2a(data[1]))
      //console.log(dataAttribute);
      //console.log(Object.keys(dataAttribute));
      for(var i in dataAttribute){
        //console.log(i);
        //console.log(dataAttribute[i]);
        loadData.push({ 'item' : i, 'value' : dataAttribute[i]})
      }

      dataAttribute = JSON.parse(this.hex2a(data[2]))
      //console.log(dataAttribute);
      //console.log(Object.keys(dataAttribute));
      for(i in dataAttribute){
        //console.log(i);
        //console.log(dataAttribute[i]);
        loadData.push({ 'item' : i, 'value' : dataAttribute[i]})
      }
      this.state.data = loadData
      //console.log(this.state.data);
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
        </BootstrapTable>);
      } else {
        return (<p>There is no data to display</p>);
      }
    }
  }
