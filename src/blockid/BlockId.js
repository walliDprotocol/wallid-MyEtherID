
export default {
    "contractName": "BlockId",
    "abi": [
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "users",
        "outputs": [
          {
            "name": "userAddress",
            "type": "address"
          },
          {
            "name": "idAttribute",
            "type": "bytes"
          },
          {
            "name": "addressAttributes",
            "type": "bytes"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "idAttr",
            "type": "bytes"
          },
          {
            "name": "addAttr",
            "type": "bytes"
          }
        ],
        "name": "addInfo",
        "outputs": [
          {
            "name": "callerAddr",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getInfo",
        "outputs": [
          {
            "name": "userAddress",
            "type": "address"
          },
          {
            "name": "idAttribute",
            "type": "bytes"
          },
          {
            "name": "addressAttributes",
            "type": "bytes"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getIdAttr",
        "outputs": [
          {
            "name": "idAttribute",
            "type": "bytes"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
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
      }
    ],
    "bytecode": "0x606060405260008055341561001357600080fd5b610aa6806100226000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063519128dd14610072578063521bb47f146101005780635a9b0b8914610129578063a43f537414610256578063a87430ba14610336575b600080fd5b341561007d57600080fd5b6100856104c1565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100c55780820151818401526020810190506100aa565b50505050905090810190601f1680156100f25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561010b57600080fd5b6101136105a9565b6040518082815260200191505060405180910390f35b341561013457600080fd5b61013c6105b2565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156101b2578082015181840152602081019050610197565b50505050905090810190601f1680156101df5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156102185780820151818401526020810190506101fd565b50505050905090810190601f1680156102455780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b341561026157600080fd5b6102f4600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506107ee565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561034157600080fd5b61036d600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610921565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200183810383528581815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561042c5780601f106104015761010080835404028352916020019161042c565b820191906000526020600020905b81548152906001019060200180831161040f57829003601f168201915b50508381038252848181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156104af5780601f10610484576101008083540402835291602001916104af565b820191906000526020600020905b81548152906001019060200180831161049257829003601f168201915b50509550505050505060405180910390f35b6104c9610969565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561059f5780601f106105745761010080835404028352916020019161059f565b820191906000526020600020905b81548152906001019060200180831161058257829003601f168201915b5050505050905090565b60008054905090565b60006105bc610969565b6105c4610969565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201818054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107405780601f1061071557610100808354040283529160200191610740565b820191906000526020600020905b81548152906001019060200180831161072357829003601f168201915b50505050509150808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107dc5780601f106107b1576101008083540402835291602001916107dc565b820191906000526020600020905b8154815290600101906020018083116107bf57829003601f168201915b50505050509050925092509250909192565b60006107f861097d565b33816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505083816020018190525082816040018190525080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906108e59291906109c1565b5060408201518160020190805190602001906109029291906109c1565b5090505060008081548092919060010191905055503391505092915050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001019080600201905083565b602060405190810160405280600081525090565b606060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016109ae610a41565b81526020016109bb610a41565b81525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610a0257805160ff1916838001178555610a30565b82800160010185558215610a30579182015b82811115610a2f578251825591602001919060010190610a14565b5b509050610a3d9190610a55565b5090565b602060405190810160405280600081525090565b610a7791905b80821115610a73576000816000905550600101610a5b565b5090565b905600a165627a7a7230582080e375a3a353ed54206fe8b7804c7cf9ba225e98bd70d1b4f1dc64dce25c33fb0029",
    "deployedBytecode": "0x60606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063519128dd14610072578063521bb47f146101005780635a9b0b8914610129578063a43f537414610256578063a87430ba14610336575b600080fd5b341561007d57600080fd5b6100856104c1565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100c55780820151818401526020810190506100aa565b50505050905090810190601f1680156100f25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561010b57600080fd5b6101136105a9565b6040518082815260200191505060405180910390f35b341561013457600080fd5b61013c6105b2565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156101b2578082015181840152602081019050610197565b50505050905090810190601f1680156101df5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156102185780820151818401526020810190506101fd565b50505050905090810190601f1680156102455780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b341561026157600080fd5b6102f4600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506107ee565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561034157600080fd5b61036d600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610921565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200183810383528581815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561042c5780601f106104015761010080835404028352916020019161042c565b820191906000526020600020905b81548152906001019060200180831161040f57829003601f168201915b50508381038252848181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156104af5780601f10610484576101008083540402835291602001916104af565b820191906000526020600020905b81548152906001019060200180831161049257829003601f168201915b50509550505050505060405180910390f35b6104c9610969565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561059f5780601f106105745761010080835404028352916020019161059f565b820191906000526020600020905b81548152906001019060200180831161058257829003601f168201915b5050505050905090565b60008054905090565b60006105bc610969565b6105c4610969565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201818054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107405780601f1061071557610100808354040283529160200191610740565b820191906000526020600020905b81548152906001019060200180831161072357829003601f168201915b50505050509150808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107dc5780601f106107b1576101008083540402835291602001916107dc565b820191906000526020600020905b8154815290600101906020018083116107bf57829003601f168201915b50505050509050925092509250909192565b60006107f861097d565b33816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505083816020018190525082816040018190525080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906108e59291906109c1565b5060408201518160020190805190602001906109029291906109c1565b5090505060008081548092919060010191905055503391505092915050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001019080600201905083565b602060405190810160405280600081525090565b606060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016109ae610a41565b81526020016109bb610a41565b81525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610a0257805160ff1916838001178555610a30565b82800160010185558215610a30579182015b82811115610a2f578251825591602001919060010190610a14565b5b509050610a3d9190610a55565b5090565b602060405190810160405280600081525090565b610a7791905b80821115610a73576000816000905550600101610a5b565b5090565b905600a165627a7a7230582080e375a3a353ed54206fe8b7804c7cf9ba225e98bd70d1b4f1dc64dce25c33fb0029",
    "sourceMap": "28:1048:0:-;;;215:1;198:18;;28:1048;;;;;;;;;;;;;;",
    "deployedSourceMap": "28:1048:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;864:113;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;983:90:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;632:226;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;266:360:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;222:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;864:113;905:17;;:::i;:::-;941:5;:17;947:10;941:17;;;;;;;;;;;;;;;:29;;934:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;864:113;:::o;983:90::-;1028:10;1057:9;;1050:16;;983:90;:::o;632:226::-;671:19;691:17;;:::i;:::-;710:23;;:::i;:::-;753:5;:17;759:10;753:17;;;;;;;;;;;;;;;:29;;;;;;;;;;;;784:5;:17;790:10;784:17;;;;;;;;;;;;;;;:29;;815:5;:17;821:10;815:17;;;;;;;;;;;;;;;:35;;745:106;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;632:226;;;:::o;266:360::-;328:18;359:20;;:::i;:::-;412:10;389:8;:20;;:33;;;;;;;;;;;455:6;432:8;:20;;:29;;;;500:7;471:8;:26;;:36;;;;563:8;543:5;:17;549:10;543:17;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;581:9;;:11;;;;;;;;;;;;;609:10;602:17;;266:360;;;;;:::o;222:37::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;28:1048::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
    "source": "pragma solidity ^ 0.4 .17;\n\ncontract BlockId {\n\n    struct User {\n        address userAddress;\n        bytes idAttribute; //array de byte\n        bytes addressAttributes; //array de byte\n    }\n\n    uint itemCount = 0;\n    mapping(address => User) public users;\n\n    function addInfo(bytes idAttr, bytes addAttr) public  returns(address callerAddr ){\n\n        User memory myStruct;\n        myStruct.userAddress = msg.sender;\n        myStruct.idAttribute = idAttr;\n        myStruct.addressAttributes = addAttr;\n        // log0(itemnew);\n        users[msg.sender] = myStruct;\n        itemCount++;\n        return msg.sender;\n    }\n\n    function getInfo() public view returns(address userAddress,bytes idAttribute, bytes addressAttributes) {\n        return (users[msg.sender].userAddress, users[msg.sender].idAttribute, users[msg.sender].addressAttributes);\n    }\n\n    function getIdAttr() public view returns(bytes idAttribute) {\n        return users[msg.sender].idAttribute;\n    }\n\n    function countItemList() public view returns(uint count) {\n        return itemCount;\n    }\n\n}",
    "sourcePath": "/home/vviana/projects/git/blockid/blockid_smartcontracts/contracts/BlockId.sol",
    "ast": {
      "absolutePath": "/home/vviana/projects/git/blockid/blockid_smartcontracts/contracts/BlockId.sol",
      "exportedSymbols": {
        "BlockId": [
          108
        ]
      },
      "id": 109,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".17"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:26:0"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 108,
          "linearizedBaseContracts": [
            108
          ],
          "name": "BlockId",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "canonicalName": "BlockId.User",
              "id": 8,
              "members": [
                {
                  "constant": false,
                  "id": 3,
                  "name": "userAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 8,
                  "src": "74:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "74:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5,
                  "name": "idAttribute",
                  "nodeType": "VariableDeclaration",
                  "scope": 8,
                  "src": "103:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes storage pointer"
                  },
                  "typeName": {
                    "id": 4,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "103:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7,
                  "name": "addressAttributes",
                  "nodeType": "VariableDeclaration",
                  "scope": 8,
                  "src": "146:23:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes storage pointer"
                  },
                  "typeName": {
                    "id": 6,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "146:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "name": "User",
              "nodeType": "StructDefinition",
              "scope": 108,
              "src": "52:140:0",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 11,
              "name": "itemCount",
              "nodeType": "VariableDeclaration",
              "scope": 108,
              "src": "198:18:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 9,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "198:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "30",
                "id": 10,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "215:1:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_0_by_1",
                  "typeString": "int_const 0"
                },
                "value": "0"
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 15,
              "name": "users",
              "nodeType": "VariableDeclaration",
              "scope": 108,
              "src": "222:37:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$8_storage_$",
                "typeString": "mapping(address => struct BlockId.User storage ref)"
              },
              "typeName": {
                "id": 14,
                "keyType": {
                  "id": 12,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "230:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "222:24:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$8_storage_$",
                  "typeString": "mapping(address => struct BlockId.User storage ref)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 13,
                  "name": "User",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 8,
                  "src": "241:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_User_$8_storage_ptr",
                    "typeString": "struct BlockId.User storage pointer"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 59,
                "nodeType": "Block",
                "src": "348:278:0",
                "statements": [
                  {
                    "assignments": [],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 25,
                        "name": "myStruct",
                        "nodeType": "VariableDeclaration",
                        "scope": 60,
                        "src": "359:20:0",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_User_$8_memory_ptr",
                          "typeString": "struct BlockId.User memory"
                        },
                        "typeName": {
                          "contractScope": null,
                          "id": 24,
                          "name": "User",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 8,
                          "src": "359:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_User_$8_storage_ptr",
                            "typeString": "struct BlockId.User storage pointer"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 26,
                    "initialValue": null,
                    "nodeType": "VariableDeclarationStatement",
                    "src": "359:20:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 32,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 27,
                          "name": "myStruct",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25,
                          "src": "389:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_User_$8_memory_ptr",
                            "typeString": "struct BlockId.User memory"
                          }
                        },
                        "id": 29,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "userAddress",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3,
                        "src": "389:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 30,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 120,
                          "src": "412:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 31,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "412:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "389:33:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 33,
                    "nodeType": "ExpressionStatement",
                    "src": "389:33:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 38,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 34,
                          "name": "myStruct",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25,
                          "src": "432:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_User_$8_memory_ptr",
                            "typeString": "struct BlockId.User memory"
                          }
                        },
                        "id": 36,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "idAttribute",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5,
                        "src": "432:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory",
                          "typeString": "bytes memory"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 37,
                        "name": "idAttr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17,
                        "src": "455:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "src": "432:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory",
                        "typeString": "bytes memory"
                      }
                    },
                    "id": 39,
                    "nodeType": "ExpressionStatement",
                    "src": "432:29:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 44,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 40,
                          "name": "myStruct",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25,
                          "src": "471:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_User_$8_memory_ptr",
                            "typeString": "struct BlockId.User memory"
                          }
                        },
                        "id": 42,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "addressAttributes",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7,
                        "src": "471:26:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory",
                          "typeString": "bytes memory"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 43,
                        "name": "addAttr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19,
                        "src": "500:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "src": "471:36:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory",
                        "typeString": "bytes memory"
                      }
                    },
                    "id": 45,
                    "nodeType": "ExpressionStatement",
                    "src": "471:36:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 51,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 46,
                          "name": "users",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 15,
                          "src": "543:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$8_storage_$",
                            "typeString": "mapping(address => struct BlockId.User storage ref)"
                          }
                        },
                        "id": 49,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 47,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 120,
                            "src": "549:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 48,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "549:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "543:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_User_$8_storage",
                          "typeString": "struct BlockId.User storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 50,
                        "name": "myStruct",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25,
                        "src": "563:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_User_$8_memory_ptr",
                          "typeString": "struct BlockId.User memory"
                        }
                      },
                      "src": "543:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_User_$8_storage",
                        "typeString": "struct BlockId.User storage ref"
                      }
                    },
                    "id": 52,
                    "nodeType": "ExpressionStatement",
                    "src": "543:28:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 54,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "581:11:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 53,
                        "name": "itemCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11,
                        "src": "581:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 55,
                    "nodeType": "ExpressionStatement",
                    "src": "581:11:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 56,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120,
                        "src": "609:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 57,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "609:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 23,
                    "id": 58,
                    "nodeType": "Return",
                    "src": "602:17:0"
                  }
                ]
              },
              "id": 60,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "addInfo",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 20,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 17,
                    "name": "idAttr",
                    "nodeType": "VariableDeclaration",
                    "scope": 60,
                    "src": "283:12:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    },
                    "typeName": {
                      "id": 16,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "283:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes storage pointer"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 19,
                    "name": "addAttr",
                    "nodeType": "VariableDeclaration",
                    "scope": 60,
                    "src": "297:13:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    },
                    "typeName": {
                      "id": 18,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "297:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes storage pointer"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "282:29:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 23,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 22,
                    "name": "callerAddr",
                    "nodeType": "VariableDeclaration",
                    "scope": 60,
                    "src": "328:18:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 21,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "328:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "327:21:0"
              },
              "scope": 108,
              "src": "266:360:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 86,
                "nodeType": "Block",
                "src": "735:123:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 69,
                              "name": "users",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 15,
                              "src": "753:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$8_storage_$",
                                "typeString": "mapping(address => struct BlockId.User storage ref)"
                              }
                            },
                            "id": 72,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 70,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 120,
                                "src": "759:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 71,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "759:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "753:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_User_$8_storage",
                              "typeString": "struct BlockId.User storage ref"
                            }
                          },
                          "id": 73,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "userAddress",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 3,
                          "src": "753:29:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 74,
                              "name": "users",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 15,
                              "src": "784:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$8_storage_$",
                                "typeString": "mapping(address => struct BlockId.User storage ref)"
                              }
                            },
                            "id": 77,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 75,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 120,
                                "src": "790:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 76,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "790:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "784:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_User_$8_storage",
                              "typeString": "struct BlockId.User storage ref"
                            }
                          },
                          "id": 78,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "idAttribute",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 5,
                          "src": "784:29:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_storage",
                            "typeString": "bytes storage ref"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 79,
                              "name": "users",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 15,
                              "src": "815:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$8_storage_$",
                                "typeString": "mapping(address => struct BlockId.User storage ref)"
                              }
                            },
                            "id": 82,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 80,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 120,
                                "src": "821:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 81,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "821:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "815:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_User_$8_storage",
                              "typeString": "struct BlockId.User storage ref"
                            }
                          },
                          "id": 83,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "addressAttributes",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7,
                          "src": "815:35:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_storage",
                            "typeString": "bytes storage ref"
                          }
                        }
                      ],
                      "id": 84,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "752:99:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_address_$_t_bytes_storage_$_t_bytes_storage_$",
                        "typeString": "tuple(address,bytes storage ref,bytes storage ref)"
                      }
                    },
                    "functionReturnParameters": 68,
                    "id": 85,
                    "nodeType": "Return",
                    "src": "745:106:0"
                  }
                ]
              },
              "id": 87,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "getInfo",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 61,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "648:2:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 68,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 63,
                    "name": "userAddress",
                    "nodeType": "VariableDeclaration",
                    "scope": 87,
                    "src": "671:19:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 62,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "671:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 65,
                    "name": "idAttribute",
                    "nodeType": "VariableDeclaration",
                    "scope": 87,
                    "src": "691:17:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    },
                    "typeName": {
                      "id": 64,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "691:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes storage pointer"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 67,
                    "name": "addressAttributes",
                    "nodeType": "VariableDeclaration",
                    "scope": 87,
                    "src": "710:23:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    },
                    "typeName": {
                      "id": 66,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "710:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes storage pointer"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "670:64:0"
              },
              "scope": 108,
              "src": "632:226:0",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 98,
                "nodeType": "Block",
                "src": "924:53:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 92,
                          "name": "users",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 15,
                          "src": "941:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$8_storage_$",
                            "typeString": "mapping(address => struct BlockId.User storage ref)"
                          }
                        },
                        "id": 95,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 93,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 120,
                            "src": "947:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 94,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "947:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "941:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_User_$8_storage",
                          "typeString": "struct BlockId.User storage ref"
                        }
                      },
                      "id": 96,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "idAttribute",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5,
                      "src": "941:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage",
                        "typeString": "bytes storage ref"
                      }
                    },
                    "functionReturnParameters": 91,
                    "id": 97,
                    "nodeType": "Return",
                    "src": "934:36:0"
                  }
                ]
              },
              "id": 99,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "getIdAttr",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 88,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "882:2:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 91,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 90,
                    "name": "idAttribute",
                    "nodeType": "VariableDeclaration",
                    "scope": 99,
                    "src": "905:17:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    },
                    "typeName": {
                      "id": 89,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "905:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes storage pointer"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "904:19:0"
              },
              "scope": 108,
              "src": "864:113:0",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 106,
                "nodeType": "Block",
                "src": "1040:33:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 104,
                      "name": "itemCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11,
                      "src": "1057:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 103,
                    "id": 105,
                    "nodeType": "Return",
                    "src": "1050:16:0"
                  }
                ]
              },
              "id": 107,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "countItemList",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 100,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1005:2:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 103,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 102,
                    "name": "count",
                    "nodeType": "VariableDeclaration",
                    "scope": 107,
                    "src": "1028:10:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 101,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1028:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1027:12:0"
              },
              "scope": 108,
              "src": "983:90:0",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 109,
          "src": "28:1048:0"
        }
      ],
      "src": "0:1076:0"
    },
    "legacyAST": {
      "absolutePath": "/home/vviana/projects/git/blockid/blockid_smartcontracts/contracts/BlockId.sol",
      "exportedSymbols": {
        "BlockId": [
          108
        ]
      },
      "id": 109,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".17"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:26:0"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 108,
          "linearizedBaseContracts": [
            108
          ],
          "name": "BlockId",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "canonicalName": "BlockId.User",
              "id": 8,
              "members": [
                {
                  "constant": false,
                  "id": 3,
                  "name": "userAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 8,
                  "src": "74:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "74:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5,
                  "name": "idAttribute",
                  "nodeType": "VariableDeclaration",
                  "scope": 8,
                  "src": "103:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes storage pointer"
                  },
                  "typeName": {
                    "id": 4,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "103:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7,
                  "name": "addressAttributes",
                  "nodeType": "VariableDeclaration",
                  "scope": 8,
                  "src": "146:23:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes storage pointer"
                  },
                  "typeName": {
                    "id": 6,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "146:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "name": "User",
              "nodeType": "StructDefinition",
              "scope": 108,
              "src": "52:140:0",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 11,
              "name": "itemCount",
              "nodeType": "VariableDeclaration",
              "scope": 108,
              "src": "198:18:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 9,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "198:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "30",
                "id": 10,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "215:1:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_0_by_1",
                  "typeString": "int_const 0"
                },
                "value": "0"
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 15,
              "name": "users",
              "nodeType": "VariableDeclaration",
              "scope": 108,
              "src": "222:37:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$8_storage_$",
                "typeString": "mapping(address => struct BlockId.User storage ref)"
              },
              "typeName": {
                "id": 14,
                "keyType": {
                  "id": 12,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "230:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "222:24:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$8_storage_$",
                  "typeString": "mapping(address => struct BlockId.User storage ref)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 13,
                  "name": "User",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 8,
                  "src": "241:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_User_$8_storage_ptr",
                    "typeString": "struct BlockId.User storage pointer"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 59,
                "nodeType": "Block",
                "src": "348:278:0",
                "statements": [
                  {
                    "assignments": [],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 25,
                        "name": "myStruct",
                        "nodeType": "VariableDeclaration",
                        "scope": 60,
                        "src": "359:20:0",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_User_$8_memory_ptr",
                          "typeString": "struct BlockId.User memory"
                        },
                        "typeName": {
                          "contractScope": null,
                          "id": 24,
                          "name": "User",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 8,
                          "src": "359:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_User_$8_storage_ptr",
                            "typeString": "struct BlockId.User storage pointer"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 26,
                    "initialValue": null,
                    "nodeType": "VariableDeclarationStatement",
                    "src": "359:20:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 32,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 27,
                          "name": "myStruct",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25,
                          "src": "389:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_User_$8_memory_ptr",
                            "typeString": "struct BlockId.User memory"
                          }
                        },
                        "id": 29,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "userAddress",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3,
                        "src": "389:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 30,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 120,
                          "src": "412:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 31,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "412:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "389:33:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 33,
                    "nodeType": "ExpressionStatement",
                    "src": "389:33:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 38,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 34,
                          "name": "myStruct",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25,
                          "src": "432:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_User_$8_memory_ptr",
                            "typeString": "struct BlockId.User memory"
                          }
                        },
                        "id": 36,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "idAttribute",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5,
                        "src": "432:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory",
                          "typeString": "bytes memory"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 37,
                        "name": "idAttr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17,
                        "src": "455:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "src": "432:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory",
                        "typeString": "bytes memory"
                      }
                    },
                    "id": 39,
                    "nodeType": "ExpressionStatement",
                    "src": "432:29:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 44,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 40,
                          "name": "myStruct",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25,
                          "src": "471:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_User_$8_memory_ptr",
                            "typeString": "struct BlockId.User memory"
                          }
                        },
                        "id": 42,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "addressAttributes",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7,
                        "src": "471:26:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory",
                          "typeString": "bytes memory"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 43,
                        "name": "addAttr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19,
                        "src": "500:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "src": "471:36:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory",
                        "typeString": "bytes memory"
                      }
                    },
                    "id": 45,
                    "nodeType": "ExpressionStatement",
                    "src": "471:36:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 51,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 46,
                          "name": "users",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 15,
                          "src": "543:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$8_storage_$",
                            "typeString": "mapping(address => struct BlockId.User storage ref)"
                          }
                        },
                        "id": 49,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 47,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 120,
                            "src": "549:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 48,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "549:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "543:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_User_$8_storage",
                          "typeString": "struct BlockId.User storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 50,
                        "name": "myStruct",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25,
                        "src": "563:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_User_$8_memory_ptr",
                          "typeString": "struct BlockId.User memory"
                        }
                      },
                      "src": "543:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_User_$8_storage",
                        "typeString": "struct BlockId.User storage ref"
                      }
                    },
                    "id": 52,
                    "nodeType": "ExpressionStatement",
                    "src": "543:28:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 54,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "581:11:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 53,
                        "name": "itemCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11,
                        "src": "581:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 55,
                    "nodeType": "ExpressionStatement",
                    "src": "581:11:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 56,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120,
                        "src": "609:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 57,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "609:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 23,
                    "id": 58,
                    "nodeType": "Return",
                    "src": "602:17:0"
                  }
                ]
              },
              "id": 60,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "addInfo",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 20,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 17,
                    "name": "idAttr",
                    "nodeType": "VariableDeclaration",
                    "scope": 60,
                    "src": "283:12:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    },
                    "typeName": {
                      "id": 16,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "283:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes storage pointer"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 19,
                    "name": "addAttr",
                    "nodeType": "VariableDeclaration",
                    "scope": 60,
                    "src": "297:13:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    },
                    "typeName": {
                      "id": 18,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "297:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes storage pointer"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "282:29:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 23,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 22,
                    "name": "callerAddr",
                    "nodeType": "VariableDeclaration",
                    "scope": 60,
                    "src": "328:18:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 21,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "328:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "327:21:0"
              },
              "scope": 108,
              "src": "266:360:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 86,
                "nodeType": "Block",
                "src": "735:123:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 69,
                              "name": "users",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 15,
                              "src": "753:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$8_storage_$",
                                "typeString": "mapping(address => struct BlockId.User storage ref)"
                              }
                            },
                            "id": 72,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 70,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 120,
                                "src": "759:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 71,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "759:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "753:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_User_$8_storage",
                              "typeString": "struct BlockId.User storage ref"
                            }
                          },
                          "id": 73,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "userAddress",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 3,
                          "src": "753:29:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 74,
                              "name": "users",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 15,
                              "src": "784:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$8_storage_$",
                                "typeString": "mapping(address => struct BlockId.User storage ref)"
                              }
                            },
                            "id": 77,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 75,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 120,
                                "src": "790:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 76,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "790:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "784:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_User_$8_storage",
                              "typeString": "struct BlockId.User storage ref"
                            }
                          },
                          "id": 78,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "idAttribute",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 5,
                          "src": "784:29:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_storage",
                            "typeString": "bytes storage ref"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 79,
                              "name": "users",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 15,
                              "src": "815:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$8_storage_$",
                                "typeString": "mapping(address => struct BlockId.User storage ref)"
                              }
                            },
                            "id": 82,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 80,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 120,
                                "src": "821:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 81,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "821:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "815:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_User_$8_storage",
                              "typeString": "struct BlockId.User storage ref"
                            }
                          },
                          "id": 83,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "addressAttributes",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7,
                          "src": "815:35:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_storage",
                            "typeString": "bytes storage ref"
                          }
                        }
                      ],
                      "id": 84,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "752:99:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_address_$_t_bytes_storage_$_t_bytes_storage_$",
                        "typeString": "tuple(address,bytes storage ref,bytes storage ref)"
                      }
                    },
                    "functionReturnParameters": 68,
                    "id": 85,
                    "nodeType": "Return",
                    "src": "745:106:0"
                  }
                ]
              },
              "id": 87,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "getInfo",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 61,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "648:2:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 68,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 63,
                    "name": "userAddress",
                    "nodeType": "VariableDeclaration",
                    "scope": 87,
                    "src": "671:19:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 62,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "671:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 65,
                    "name": "idAttribute",
                    "nodeType": "VariableDeclaration",
                    "scope": 87,
                    "src": "691:17:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    },
                    "typeName": {
                      "id": 64,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "691:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes storage pointer"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 67,
                    "name": "addressAttributes",
                    "nodeType": "VariableDeclaration",
                    "scope": 87,
                    "src": "710:23:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    },
                    "typeName": {
                      "id": 66,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "710:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes storage pointer"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "670:64:0"
              },
              "scope": 108,
              "src": "632:226:0",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 98,
                "nodeType": "Block",
                "src": "924:53:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 92,
                          "name": "users",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 15,
                          "src": "941:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$8_storage_$",
                            "typeString": "mapping(address => struct BlockId.User storage ref)"
                          }
                        },
                        "id": 95,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 93,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 120,
                            "src": "947:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 94,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "947:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "941:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_User_$8_storage",
                          "typeString": "struct BlockId.User storage ref"
                        }
                      },
                      "id": 96,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "idAttribute",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5,
                      "src": "941:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage",
                        "typeString": "bytes storage ref"
                      }
                    },
                    "functionReturnParameters": 91,
                    "id": 97,
                    "nodeType": "Return",
                    "src": "934:36:0"
                  }
                ]
              },
              "id": 99,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "getIdAttr",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 88,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "882:2:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 91,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 90,
                    "name": "idAttribute",
                    "nodeType": "VariableDeclaration",
                    "scope": 99,
                    "src": "905:17:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    },
                    "typeName": {
                      "id": 89,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "905:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes storage pointer"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "904:19:0"
              },
              "scope": 108,
              "src": "864:113:0",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 106,
                "nodeType": "Block",
                "src": "1040:33:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 104,
                      "name": "itemCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11,
                      "src": "1057:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 103,
                    "id": 105,
                    "nodeType": "Return",
                    "src": "1050:16:0"
                  }
                ]
              },
              "id": 107,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "countItemList",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 100,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1005:2:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 103,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 102,
                    "name": "count",
                    "nodeType": "VariableDeclaration",
                    "scope": 107,
                    "src": "1028:10:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 101,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1028:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1027:12:0"
              },
              "scope": 108,
              "src": "983:90:0",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 109,
          "src": "28:1048:0"
        }
      ],
      "src": "0:1076:0"
    },
    "compiler": {
      "name": "solc",
      "version": "0.4.19+commit.c4cbbb05.Emscripten.clang"
    },
    "networks": {
      "5777": {
        "events": {},
        "links": {},
        "address": "0xf204a4ef082f5c04bb89f7d5e6568b796096735a",
        "transactionHash": "0x122ab3229a4ca202ac65411e3c5aa8f0147793d2d23908aee79373f1b789a061"
      }
    },
    "schemaVersion": "2.0.0",
    "updatedAt": "2018-03-19T19:09:26.155Z"
  }