
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
          "name": "pWalletAddress",
          "type": "bytes"
        },
        {
          "name": "pName",
          "type": "bytes"
        },
        {
          "name": "pUrl",
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
      "constant": false,
      "inputs": [
        {
          "name": "_id",
          "type": "bytes32"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_id",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Deposit",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "countItemList",
      "outputs": [
        {
          "name": "count",
          "type": "uint256"
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
          "name": "pWalletAddress",
          "type": "bytes"
        },
        {
          "name": "ridt",
          "type": "bytes"
        },
        {
          "name": "pName",
          "type": "bytes"
        },
        {
          "name": "pUrl",
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
