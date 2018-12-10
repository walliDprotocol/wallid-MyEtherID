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
      <main role="main">
        <div className="container">

         <div className="row text-left  pb-4 containerBorderBottom">
            <div className="text-left">
                <h2 className="pb-2">Check your identities transactions</h2>
                <h3 className="text-blue  align-left">
                Confirm ID transactions from your wallet
                </h3>
            </div>
        </div>

         


          <div className="jumbotron">
            <div className="row text-center justify-content-md-center pt-2 pb-2">
              <div className="col text-center">
                <div class="pt-2 pb-2">Check the transaction history at Etherscan, pressing <a class="new-blue strong " href="https://rinkeby.etherscan.io/address/0x787e5fc4773cad0c45f287bf00daca402845b1b7" target="_blank rel=noopener">here</a>.</div>
              </div>
            </div>
          </div>
          {/* <div className="row pb-3 containerBorderBottom">
            <div className="col">
              <div className="row">
                <div className="col">
                  <div className="text-center">
                    <img className="img-fluid imgTransaction" src={require('./img/blockchain.svg')} alt="Blockchain Transation" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
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
        </div>
      </main>
    );
  }
}

export default Transactions;
