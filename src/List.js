import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// products will be presented by react-bootstrap-table
var products = [{
  TxHash: "0x238cDa7B...",
  Block: "1781477",
  Age: "14 days 2 hrs ago",
  From: "0x238cDa7B...",
  To: "0x328cDa7B...",
  Value: "1 Ether",
  TxFee: "0.000021"
},
{
  TxHash: "0x238cDa7B...",
  Block: "1781477",
  Age: "14 days 2 hrs ago",
  From: "0x238cDa7B...",
  To: "0x328cDa7B...",
  Value: "1 Ether",
  TxFee: "0.000021"
},
{
  TxHash: "0x238cDa7B...",
  Block: "1781477",
  Age: "14 days 2 hrs ago",
  From: "0x238cDa7B...",
  To: "0x328cDa7B...",
  Value: "1 Ether",
  TxFee: "0.000021"
},
{
  TxHash: "0x238cDa7B...",
  Block: "1781477",
  Age: "14 days 2 hrs ago",
  From: "0x238cDa7B...",
  To: "0x328cDa7B...",
  Value: "1 Ether",
  TxFee: "0.000021"
},
{
  TxHash: "0x238cDa7B...",
  Block: "1781477",
  Age: "14 days 2 hrs ago",
  From: "0x238cDa7B...",
  To: "0x328cDa7B...",
  Value: "1 Ether",
  TxFee: "0.000021"
},
{
  TxHash: "0x238cDa7B...",
  Block: "1781477",
  Age: "14 days 2 hrs ago",
  From: "0x238cDa7B...",
  To: "0x328cDa7B...",
  Value: "1 Ether",
  TxFee: "0.000021"
},
{
  TxHash: "0x238cDa7B...",
  Block: "1781477",
  Age: "14 days 2 hrs ago",
  From: "0x238cDa7B...",
  To: "0x328cDa7B...",
  Value: "1 Ether",
  TxFee: "0.000021"
},
{
  TxHash: "0x238cDa7B...",
  Block: "1781477",
  Age: "14 days 2 hrs ago",
  From: "0x238cDa7B...",
  To: "0x328cDa7B...",
  Value: "1 Ether",
  TxFee: "0.000021"
},
{
  TxHash: "0x238cDa7B...",
  Block: "1781477",
  Age: "14 days 2 hrs ago",
  From: "0x238cDa7B...",
  To: "0x328cDa7B...",
  Value: "1 Ether",
  TxFee: "0.000021"
},
{
  TxHash: "0x238cDa7B...",
  Block: "1781477",
  Age: "14 days 2 hrs ago",
  From: "0x238cDa7B...",
  To: "0x328cDa7B...",
  Value: "1 Ether",
  TxFee: "0.000021"
},
{
  TxHash: "0x238cDa7B...",
  Block: "1781477",
  Age: "14 days 2 hrs ago",
  From: "0x238cDa7B...",
  To: "0x328cDa7B...",
  Value: "1 Ether",
  TxFee: "0.000021"
},
{
  TxHash: "0x238cDa7B...",
  Block: "1781477",
  Age: "14 days 2 hrs ago",
  From: "0x238cDa7B...",
  To: "0x328cDa7B...",
  Value: "1 Ether",
  TxFee: "0.000021"
},
{
  TxHash: "0x238cDa7B...",
  Block: "1781477",
  Age: "14 days 2 hrs ago",
  From: "0x238cDa7B...",
  To: "0x328cDa7B...",
  Value: "1 Ether",
  TxFee: "0.000021"
}
];
class List extends Component {
  render() {
    return (
      <div>
        <h2>List</h2>
        <p>List  the transactions of your IDs</p>
        <BootstrapTable
          data={products}
          hover
          condensed
          pagination
          search
          >
          <TableHeaderColumn dataField="TxHash" width='20%' isKey={true}>TxHash</TableHeaderColumn>
          <TableHeaderColumn dataField="Block" width='10%'>Block</TableHeaderColumn>
          <TableHeaderColumn dataField="Age" width='10%'>Age</TableHeaderColumn>
          <TableHeaderColumn dataField="From" width='20%'>From</TableHeaderColumn>
          <TableHeaderColumn dataField="To" width='20%'>To</TableHeaderColumn>
          <TableHeaderColumn dataField="Value" width='10%'>Value</TableHeaderColumn>
          <TableHeaderColumn dataField="TxFee" width='10%'>[TxFee]</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default List;
