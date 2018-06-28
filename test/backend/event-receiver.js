var Web3 = require('web3');
var data = require('./definition.json')

var INFURA_RINKBY = 'https://rinkeby.infura.io/cFPVC7DEylasScNoPTYP';

if (typeof web3 !== 'undefined') {
  var web3 = new Web3(web3.currentProvider)
} else {
    console.log('connect with infura')
  var web3 = new Web3(new Web3.providers.HttpProvider(INFURA_RINKBY))
}

console.log('data was ', data)
console.log('===================================== ', web3.eth.Contract )

var  MyContract = new web3.eth.Contract(data.abi, data.address);
console.log('my ', MyContract)

//var ContractInstance = MyContract.at(data.address)

console.log('------------------------------ ' )
console.log('Contract options ', MyContract.options);


var contractAddress = '0x3ea36fad89cafdc84bc0ce82e0d98c6c0a796b19';
var txOptions = {
    nonce: web3.toHex(web3.eth.getTransactionCount(address)),
    gasLimit: web3.toHex(800000),
    gasPrice: web3.toHex(20000000000),
    to: contractAddress
}





