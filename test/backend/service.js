var Web3 = require('web3');
var request = require('request');
var lightwallet = require('eth-lightwallet');
var txutils = lightwallet.txutils;
var contract = require('truffle-contract');
var util = require('util');
var tx = require('ethereumjs-tx');

var meta_info = require('./definition.json');
var interface_abi = meta_info.abi;

/** websocket tested for event */
//var ws_provider = 'wss://rinkeby.infura.io/ws'
//var web3 = new Web3(new Web3.providers.WebsocketProvider(ws_provider));

//wss://mainnet.infura.io/ws | tested and working
//wss://rinkeby.infura.io/ws

//local :  http://127.0.0.1:8545
//local websocket : ws://127.0.0.1:8546
//infura https://rinkeby.infura.io/cFPVC7DEylasScNoPTYP

var web3 = new Web3(
  new Web3.providers.HttpProvider('http://127.0.0.1:8545')
);


var address_wallet = "0x6Ff539fDE26ec962cC22B2e74c66c774fd38B1D2";
//adress from last contract!
var contract_addr = "0x787e5fc4773cad0c45f287bf00daca402845b1b7";
//My key from metamask
var key = interface_abi.private_key;


var econtract = new web3.eth.Contract(interface_abi, contract_addr, {
  from: address_wallet, // default from address
  gasPrice: '20000000000', // default gas price in wei, 20 gwei in this case

});


var SmartCaller = function () {
  this.init();
}

SmartCaller.prototype = {
  init: function () {
    console.log('Init Smart Caller Instance');
    //web3.eth.personal.unlockAccount(eth.accounts[0], "BENFICA")

    web3.eth.personal.unlockAccount(address_wallet, 'BENFICA')
      .then(result => {
        util.log(`>>>>> contractApi - Is dealer account unlocked ? ${result}`);
        util.log('>>>>> contractApi - Ready to call methods');

      }, error => {
        console.error('Error unlockAccount ', error);
      })

  },
  acceptToken: function (userAddress, idt, opid, sdkey) {
    console.log('AcceptToken smartCaller method');
    econtract.methods.acceptedToken(userAddress, idt, opid, sdkey).send({
      from: address_wallet,
      gasPrice: '20000000000',
      gas: 1000000
    }, function (error, result) {
      if (error) {
        console.error('error exection the contract [acceptedToken]', error);
      } else {
        console.log('SUCCESS CALLING  [acceptedToken]', result)
      }
    });
  },
  /** storeId provider is replying with user data */
  acceptedUserData: function (userAddress, idt, opid, verifyId) {
    console.log('acceptedUserData smartCaller method');
    econtract.methods.acceptedUserData(userAddress, idt, opid, verifyId).send({
      from: address_wallet,
      gasPrice: '20000000000',
      gas: 1000000
    }, function (error, result) {
      if (error) {
        console.error('error exection the contract [acceptedUserData]', error);
      } else {
        console.log('SUCCESS CALLING  [acceptedUserData]', result)
      }
    });
  },
}






module.exports = new SmartCaller();



function run2() {
  econtract.methods.getIdtDataVerified('0x43435f5054', '0x43435f5054').send({
    from: address_wallet,
    gasPrice: '20000000000',
    gas: 1000000
  }, function (error, result) {
    if (error) {
      console.error('error exection the contract [acceptedToken]', error);
    } else {
      console.log('SUCCESS CALLING  [acceptedToken]', result)
    }
  });
}

function run() {

  /*

  Execute the transaction
  */

  var contractAddress = contract_addr
  var txOptions = {
    nonce: web3.utils.toHex(web3.eth.getTransactionCount(address_wallet)),
    gasLimit: web3.utils.toHex(1000000),
    gasPrice: web3.utils.toHex(20000000000),
    to: contractAddress
  }

  var rawTx = txutils.functionTx(interface_abi, 'getIdtDataVerified', ['CC_PT', '0x1'], txOptions);
  sendRaw(rawTx);

}

//https://www.polarsparc.com/xhtml/Ethereum-Web-App.html
function run3() {

  console.log('AUTH')


}