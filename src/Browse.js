import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

// products will be presented by react-bootstrap-table
var products = [
{
  Entity: "Portuguese Republic",
  IDCertificate: "x 509",
  Card: "Cartão de Cidadão",
  Attributes: "Identity, Address",
  SCaddress: "9h8gj79x",
  SCDate: " 12 Jan 18"
},
{
  Entity: "Ord. Advogados",
  IDCertificate: "x 509",
  Card: "Ballot",
  Attributes: "Identity",
  SCaddress: "8htr1d99",
  SCDate: "08 Fev 18"
}
];

class Browse extends Component {
  render() {
    return (
      <div>
        <h2>Browse your identities</h2>
        <br />
        <div class="form-group">
          <label>Paste an Ether wallet public address below to check it’s owner certified identities</label>
          <input type="password" name="password" onChange={this.handleChange} class="form-control" placeholder="Ether wallet public address" required />
        </div>
        <br />
        <BootstrapTable
          data={products}
          hover
          condensed
          pagination
          search
          >
          <TableHeaderColumn dataField="Entity" width='20%' isKey={true}>Entity</TableHeaderColumn>
          <TableHeaderColumn dataField="IDCertificate" width='10%'>ID certificate</TableHeaderColumn>
          <TableHeaderColumn dataField="Card" width='10%'>Card</TableHeaderColumn>
          <TableHeaderColumn dataField="Attributes" width='20%'>Attributes</TableHeaderColumn>
          <TableHeaderColumn dataField="SCaddress" width='20%'>SCaddress</TableHeaderColumn>
          <TableHeaderColumn dataField="SCDate" width='20%'>SC date</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Browse;
