
export default {
  "contractName": "BlockId",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "identityId",
          "type": "bytes"
        },
        {
          "name": "idt",
          "type": "bytes"
        },
        {
          "name": "idtName",
          "type": "bytes"
        },
        {
          "name": "pWalletId",
          "type": "bytes"
        }
      ],
      "name": "addInfo",
      "outputs": [
        {
          "name": "callerAdd",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "idt",
          "type": "bytes"
        }
      ],
      "name": "getIdtData",
      "outputs": [
        {
          "name": "identityId",
          "type": "bytes"
        },
        {
          "name": "pWalletId",
          "type": "bytes"
        },
        {
          "name": "ridt",
          "type": "bytes"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "mData",
      "outputs": [
        {
          "name": "isValid",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "newCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
}
