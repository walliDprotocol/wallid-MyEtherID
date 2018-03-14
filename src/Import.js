import React, { Component } from "react";
import ImportForm from './components/ImportForm';

class Import extends Component {
  render() {
    return (
      <div>
      <h2>Import</h2>
      <p>Import your data provided by ImportID App</p>
      <ImportForm />
      </div>
    );
  }
}

export default Import;
