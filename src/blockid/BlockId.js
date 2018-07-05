
export default {
  "contractName": "BlockId",
  "abi":  [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_wallId",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "idt",
                "type": "bytes"
            },
            {
                "indexed": false,
                "name": "opid",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "identityId",
                "type": "bytes"
            },
            {
                "indexed": false,
                "name": "veridyId",
                "type": "bytes"
            }
        ],
        "name": "EventDataId",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            },
            {
                "name": "idt",
                "type": "bytes"
            },
            {
                "name": "opid",
                "type": "uint256"
            },
            {
                "name": "sdkey",
                "type": "bytes"
            }
        ],
        "name": "acceptedToken",
        "outputs": [
            {
                "name": "ret",
                "type": "bool"
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
                "name": "userAddress",
                "type": "address"
            },
            {
                "name": "idt",
                "type": "bytes"
            },
            {
                "name": "opid",
                "type": "uint256"
            },
            {
                "name": "verifyId",
                "type": "bytes"
            }
        ],
        "name": "acceptedUserData",
        "outputs": [
            {
                "name": "ret",
                "type": "bool"
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
            },
            {
                "name": "opid",
                "type": "uint256"
            },
            {
                "name": "sdkey",
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
                "name": "idt",
                "type": "bytes"
            },
            {
                "name": "opid",
                "type": "uint256"
            }
        ],
        "name": "getIdtDataVerified",
        "outputs": [
            {
                "name": "ret",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_wallId",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "idt",
                "type": "bytes"
            },
            {
                "indexed": false,
                "name": "opid",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "sdkey",
                "type": "bytes"
            }
        ],
        "name": "RequestVerifyId",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_wallId",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "idt",
                "type": "bytes"
            },
            {
                "indexed": false,
                "name": "opid",
                "type": "uint256"
            }
        ],
        "name": "RequestPayment",
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
            },
            {
                "name": "opid",
                "type": "bytes"
            }
        ],
        "name": "getIdtData",
        "outputs": [
            {
                "name": "ridentityId",
                "type": "bytes"
            },
            {
                "name": "rpWalletId",
                "type": "bytes"
            },
            {
                "name": "ridt",
                "type": "bytes"
            },
            {
                "name": "ropid",
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
