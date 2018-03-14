import React, { Component } from "react";
import ImportForm from './components/ImportForm';

function handleClick(e) {
  e.preventDefault();
  console.log("importData = " + document.getElementById("importData").value);
  alert("importData button pressed");
}

class Import extends Component {
  render() {
    return (
      <div>
      <h2>Import</h2>
      <p>Import your data provided by ImportID App</p>
      <div id="import-form-react-component"></div>
      </div>
    );
  }
}

export default Import;
