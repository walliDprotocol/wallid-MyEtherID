import React, { Component } from "react";

class ImportForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      walletAddress: '',
      password: '',
      data: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    alert('Data submited')
    console.log('WalletAddress' + this.state.walletAddress);
    console.log('Password' + this.state.password);
    console.log('Data' + this.state.data);
  event.preventDefault();
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <div class="form-group">
        <label>Pick your ID to import:</label>
        <select class="form-control" required>
          <option value="grapefruit">Cartão do Cidadão - República Portuguesa</option>
        </select>
      </div>
      <div class="form-group">
        <label>Wallet Address:</label>
        <input type="text" name="walletAddress" onChange={this.handleChange} class="form-control" placeholder="Enter wallet address" required/>
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" name="password" onChange={this.handleChange} class="form-control" required />
      </div>
      <div class="form-group">
        <label>ImportID data:</label>
        <textarea id="importData" name="data" onChange={this.handleChange} class="form-control" rows="5" placeholder="Past here your BlockId Data?" required></textarea>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}
}

export default ImportForm;
