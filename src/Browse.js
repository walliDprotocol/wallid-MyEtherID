import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

// products will be presented by react-bootstrap-table
var products = [
{
  Entity: "Portuguese Republic",
  Card: "Cartão de Cidadão",
  Attributes: "Identity, Address",
  CreatedAt: "12 Jan 2018"
},
{
  Entity: "CML",
  Card: "Lisboa VIVA",
  Attributes: "Lisboa VIVA pass",
  CreatedAt: "12 Jan 2018"
}
];

class Browse extends Component {
  render() {
    return (
      <div>
        <h2>Browse your identities</h2>
        <br />
        <BootstrapTable
          data={products}
          hover
          condensed
          pagination
          search
          >
          <TableHeaderColumn dataField="Entity" width='30%' isKey={true}>Entity</TableHeaderColumn>
          <TableHeaderColumn dataField="Card" width='20%'>Card</TableHeaderColumn>
          <TableHeaderColumn dataField="Attributes" width='30%'>Attributes</TableHeaderColumn>
          <TableHeaderColumn dataField="CreatedAt" width='20%'>Created At</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Browse;
