import React, { Component } from "react";
import ImportForm from './components/ImportForm';

class Import extends Component {
  render() {
    return (
      <div>
      <h2>Import MyBlockID identity</h2>
      <br />
      <ImportForm />
      </div>
    );
  }
}

export default Import;
