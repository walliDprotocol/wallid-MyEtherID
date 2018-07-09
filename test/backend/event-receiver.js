var Web3 = require('web3');
var lightwallet = require('eth-lightwallet');
var txutils = lightwallet.txutils;
var meta_info = require('./definition.json');
var tx = require('ethereumjs-tx');

var INFURA_RINKBY = 'https://rinkeby.infura.io/cFPVC7DEylasScNoPTYP';

var address_wallet = '0x6Ff539fDE26ec962cC22B2e74c66c774fd38B1D2'
//adress from last contract!
var contract_addr = '0x21c71059b8432084d52bc46c3c09c7e38be022f7';
//My key from metamask
var key = '12af950377a6d4fece30892ffe505d637524efcb6dfd8c555bccb45eefa4f177';

var interface_abi = meta_info.abi;

var web3 = new Web3(
  new Web3.providers.HttpProvider('ws://127.0.0.1:8546')
);

//console.log('web3 is not defined ', web3);

/** utils function to execute transaction with sign and other stuff or not :) */
function sendRaw(rawTx) {
  var privateKey = new Buffer(key, 'hex');
  var transaction = new tx(rawTx);
  transaction.sign(privateKey);
  var serializedTx = transaction.serialize().toString('hex');
  web3.eth.sendSignedTransaction(
    '0x' + serializedTx,
    function (err, result) {
      if (err) {
        console.log('Error in transaction ', err);
      } else {
        console.log('Success transaction ', result);
      }
    });
}


/*

Execute the transaction

var contractAddress = contract_addr
var txOptions = {
    nonce: web3.utils.toHex(web3.eth.getTransactionCount(address_wallet)),
    gasLimit: web3.utils.toHex(800000),
    gasPrice: web3.utils.toHex(20000000000),
    to: contractAddress
}


var rawTx = txutils.functionTx(interface_abi, 'getIdtData', ['cc_pt'], txOptions);
sendRaw(rawTx);

*/


/** instanciat the contract */

var myContract = new web3.eth.Contract(interface_abi, contract_addr, {
  from: address_wallet, // default from address
  gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
});


/* call contract
myContract.methods.getIdtData('0x43435f5054').call({
  from: address_wallet
}, function (error, result) {
  if (error) {
    console.error('error exection the contract ', error);
  } else {
    console.log('SUCESS ', result)
  }
});
*/




myContract.events.allEvents((error, event) => {
  if (error) {
    console.error(error)
    return false
  }

  console.log(event)
});
