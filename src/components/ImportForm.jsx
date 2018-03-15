import React from "react";

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
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    alert('Data submited')
    console.log('WalletAddress :' + this.state.walletAddress);
    console.log('Password : ' + this.state.password);
    console.log('Data :' + this.state.data);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div class="form-group">
          <label>Identity document:</label>
          <select class="form-control" required>
            <option value="grapefruit">Cartão do Cidadão - República Portuguesa</option>
          </select>
        </div>
        <div class="form-group">
          <label>Ether Wallet Address:</label>
          <input type="text" name="walletAddress" onChange={this.handleChange} class="form-control" placeholder="Enter your wallet address" required/>
        </div>
        <div class="form-group">
          <label>BlockID Encryption Password</label>
          <input type="password" name="password" onChange={this.handleChange} class="form-control" placeholder="Create the password to encrypt and then later decrypt your certified ID attributes" required />
        </div>
        <p><a href="https://blockid.herokuapp.com">What is BlockID Encrytion Password?</a></p>
        <div class="form-group">
          <label>Confirm BlockID Encryption Password:</label>
          <input type="password" name="password" onChange={this.handleChange} class="form-control" placeholder="Create the password to encrypt and later decrypt your certified ID attributes" required />
        </div>
        <div class="form-group">
          <label>ID Data:</label>
          <textarea id="importData" name="data" onChange={this.handleChange} class="form-control" rows="5" placeholder="Paste your ID Data provided by BlockID’s Import ID App" required></textarea>
        </div>
        <input type="submit" value="Connect to metamask - Recommended action" />
        <p><a href="https://metamask.io/">what is Metamask?</a></p>
          <div class="form-group">
            <label>Paste Private Key: Not recommended</label>
            <input type="password" name="password" onChange={this.handleChange} class="form-control" placeholder="Paste Private Key: Not recommended" />
          </div>
          <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ImportForm;
