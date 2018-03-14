import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// products will be presented by react-bootstrap-table
var products = [{
  Service: "DemoBank",
  Entity: "Portuguese Republic",
  Card: "Cartão de Cidadão",
  Attributes: "Identity, Address",
  AccessedIn: "2 Set 2018"
},
{
  Service: "CarRENT",
  Entity: "Portuguese Republic",
  Card: "Cartão de Cidadão",
  Attributes: "Identity",
  AccessedIn: "3 Jan 2018"
},
{
  Service: "Hotel Rio",
  Entity: "CML",
  Card: "Lisboa VIVA",
  Attributes: "Lisboa VIVA Pass",
  AccessedIn: "4 Jan 2018"
}
];
class List extends Component {
  render() {
    return (
      <div>
        <h2>List the transactions of your identities</h2>
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
          <TableHeaderColumn dataField="Card" width='20%'>Card</TableHeaderColumn>
          <TableHeaderColumn dataField="Attributes" width='20%'>Attributes</TableHeaderColumn>
          <TableHeaderColumn dataField="AccessedIn" width='20%'>Accessed in</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default List;
