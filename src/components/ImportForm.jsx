import React from "react";
import Web3 from 'web3'
import BlockIdContract from '../blockid/BlockId.js'

window.addEventListener('reload', function () {
  if(typeof web3 !== 'undefined'){
    console.log("Using web3 detected from external source like Metamask")
    window.web3 = new Web3(window.web3.currentProvider)
  }else{
    console.log("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
  }
});

class ImportForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      walletAddress: '',
      password: '',
      data: '',
      ContractAddress : '0x82209352470b2f22f5a6874790114d5651a75285',
      ContractInstance : null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    if(window.web3){
      const MyContract = window.web3.eth.contract(BlockIdContract.abi)
      this.state.ContractInstance = MyContract.at(this.state.ContractAddress)

      this.state.ContractInstance.countItemList( (err, data) => {
        console.log('Count items :  ', data);
        console.log('total items #', data.c[0] );
      });
    }
  }

  hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 2; i < hex.length; i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {

    console.log('WalletAddress :' + this.state.walletAddress);
    console.log('Password : ' + this.state.password);
    console.log('Data :' + this.state.data);

    var obj = JSON.parse(this.state.data);

    var idAttr = JSON.stringify( obj.id_attributes);
    var address = JSON.stringify( obj.address_attributes);
    console.log('user address ',obj.address_attributes );

    this.state.ContractInstance.addInfo( idAttr ,  address , (err, data) => {
      console.log('add info result is ', data);
    });

    event.preventDefault();
  }

  /* run after component render */
  componentDidMount(){
  }

  /* run before component render */
  componentWillMount(){
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
        {/*<div class="form-group">
          <label>BlockID Encryption Password</label>
          <input type="password" name="password" onChange={this.handleChange} class="form-control" placeholder="Create the password to encrypt and then later decrypt your certified ID attributes" required />
          </div>
          <p><a href="https://blockid.herokuapp.com">What is BlockID Encrytion Password?</a></p>
          <div class="form-group">
          <label>Confirm BlockID Encryption Password:</label>
          <input type="password" name="password" onChange={this.handleChange} class="form-control" placeholder="Create the password to encrypt and later decrypt your certified ID attributes" required />
          </div>
          */}
          <div class="form-group">
            <label>ID Data:</label>
            <textarea id="importData" name="data" onChange={this.handleChange} class="form-control" rows="5" placeholder="Paste your ID Data provided by BlockID’s Import ID App" required></textarea>
          </div>
          <input type="submit" value="Connect to metamask" /> Recommended action
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
