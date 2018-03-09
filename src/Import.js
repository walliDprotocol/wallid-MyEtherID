import React, { Component } from "react";

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
      <p>Import your IDs</p>
      <div>
      <textarea id="importData" className="form-control" rows="10" placeholder="Past here your BlockId Data?" required></textarea>
      <br></br>
      <button type="button" className="btn" onClick={handleClick}>Import</button>
      </div>
      </div>
    );
  }
}

export default Import;
