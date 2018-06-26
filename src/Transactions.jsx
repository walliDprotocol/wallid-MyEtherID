import React, { Component } from "react";
//import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// products will be presented by react-bootstrap-table
/*var products = [{
Service: "CrediBank",
Entity: "Portuguese Republic",
Card: "Cartão de Cidadão",
Attributes: "Identity, Address",
SCaddress: "9h8gj79x9h8gj79x",
TransactionDate: " 21 Jan 18"
},
{
Service: "CarRENT",
Entity: "Ord. Advg.",
Card: "Ballot",
Attributes: "Identity",
SCaddress: "8htr1d998htr1d99",
TransactionDate: "16 Fev 18"
}
];*/
class Transactions extends Component {
  render() {
    return (
      <main role="main" className="container">
        <div className="scroll-pre"></div>
        <div className="row justify-content-md-center pb-3 containerBorderBottom">
          <div className="col text-center">
            <h1 className="pb-3">Check your identities transactions</h1>
            <h2 className="colorGrey">
              Confirm BlockID’s smart contract Identity transactions
            </h2>
          </div>
        </div>
        <div className="row pt-3 pb-3 containerBorderBottom">
          <div className="col text-center">
            <p>Check the transaction history at Etherscan, pressing <a href="https://rinkeby.etherscan.io/address/0x7f852d0be239e1a547b07c88aa54cfcc98a80f49" target="_blank rel=noopener">here</a>.</p>
          </div>
        </div>
        <div className="row pb-3 containerBorderBottom">
          <div className="col">
            <div className="row">
              <div className="col">
                <div className="text-center">
                  <img className="img-fluid imgTransaction" src={require('./img/blockchain.svg')} alt="Blockchain Transation" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<br />
        <div className="form-group">
        <label>Paste an Ether wallet public address below to check its transaction history</label>
        <input type="password" name="password" onChange={this.handleChange} className="form-control" placeholder="Ether wallet public address" required />
        </div>
        <br />
        <BootstrapTable
        data={products}
        hover
        condensed
        pagination
        search
        >
        <TableHeaderColumn dataField="Service" width='20%'>Service</TableHeaderColumn>
        <TableHeaderColumn dataField="Entity" width='20%' isKey={true}>Entity</TableHeaderColumn>
        <TableHeaderColumn dataField="Card" width='15%'>Card</TableHeaderColumn>
        <TableHeaderColumn dataField="Attributes" width='15%'>Attributes</TableHeaderColumn>
        <TableHeaderColumn dataField="SCaddress" width='15%'>SC Address</TableHeaderColumn>
        <TableHeaderColumn dataField="TransactionDate" width='15%'>Transaction Date</TableHeaderColumn>
        </BootstrapTable>*/}
      </main>
    );
  }
}

export default Transactions;
