// Automatically generated with Reach 0.1.6 (66f7fd96)
/* eslint-disable */
export const _version = '0.1.6';
export const _versionHash = '0.1.6 (66f7fd96)';
export const _backendVersion = 5;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Gig(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Gig expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Gig expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc2 = stdlib.T_Object({
    details: ctc1,
    duration: ctc0,
    goal: ctc0,
    name: ctc1
    });
  const ctc3 = stdlib.T_Null;
  
  
  const v38 = stdlib.protect(ctc0, interact.contractDuration, 'for Gig\'s interact field contractDuration');
  const v39 = stdlib.protect(ctc0, interact.fundraisingGoal, 'for Gig\'s interact field fundraisingGoal');
  const v40 = stdlib.protect(ctc1, interact.projectDetails, 'for Gig\'s interact field projectDetails');
  const v41 = stdlib.protect(ctc1, interact.projectName, 'for Gig\'s interact field projectName');
  
  const v45 = {
    details: v40,
    duration: v38,
    goal: v39,
    name: v41
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v45],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:37:8:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v47], secs: v49, time: v48, didSend: v29, from: v46 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v47], secs: v49, time: v48, didSend: v29, from: v46 } = txn1;
  ;
  stdlib.protect(ctc3, await interact.reportDone(), {
    at: './index.rsh:1:39:application',
    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:38:27:application call to "liftedInteract" (defined at: ./index.rsh:38:27:application)'],
    msg: 'reportDone',
    who: 'Gig'
    });
  
  return;
  
  
  };
export async function Sponsor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Sponsor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Sponsor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    details: ctc0,
    duration: ctc1,
    goal: ctc1,
    name: ctc0
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc2],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v47], secs: v49, time: v48, didSend: v29, from: v46 } = txn1;
  ;
  return;
  
  
  };
const _ALGO = {
  appApproval: `#pragma version 5
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
int 0
extract_uint64
store 1
dup
int 8
extract_uint64
store 2
extract 16 32
store 3
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
preamble:
// Handler 0
dup
int 0
==
bz l0_afterHandler0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 176
==
assert
dup
extract 0 32
store 255
dup
extract 32 144
store 254
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:37:8:dot"
// "[]"
int 100000
dup
bz l1_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l1_checkTxnK:
pop
// "CheckPay"
// "./index.rsh:37:8:dot"
// "[]"
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l2_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l0_afterHandler0:
int 0
assert
updateState:
byte base64()
load 1
itob
load 2
itob
load 3
concat
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
global ZeroAddress
store 3
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  escrow: `#pragma version 5
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 5
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "_details",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_duration",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_goal",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "_name",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T1",
                "name": "v47",
                "type": "tuple"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "_details",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_duration",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_goal",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "_name",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T1",
                "name": "v47",
                "type": "tuple"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e0",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516104fc3803806104fc8339810160408190526100229161019f565b60008055436003556040517fd16a4bfee3921f5b4806764ef8ec626ee702553dd9045cc7a87b4a76032b08eb9061005a908390610253565b60405180910390a161006e3415600761008a565b60008080556001819055610084906002906100b3565b506102e8565b816100af5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b5080546100bf906102ad565b6000825580601f106100cf575050565b601f0160209004906000526020600020908101906100ed91906100f0565b50565b5b8082111561010557600081556001016100f1565b5090565b604080519081016001600160401b038111828210171561013957634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b038111828210171561013957634e487b7160e01b600052604160045260246000fd5b60006040828403121561018157600080fd5b610189610109565b9050815181526020820151602082015292915050565b600081830360e08112156101b257600080fd5b6101ba610109565b8351815260c0601f19830112156101d057600080fd5b6040519150602082016001600160401b038111838210171561020257634e487b7160e01b600052604160045260246000fd5b60405261020d61013f565b61021a866020870161016f565b8152606085015160208201526080850151604082015261023d8660a0870161016f565b6060820152825260208101919091529392505050565b8151815260208083015151805180518385015290910151604083015260e08201906020810151606084015260408101516080840152606081015190506102a660a084018280518252602090810151910152565b5092915050565b600181811c908216806102c157607f821691505b602082108114156102e257634e487b7160e01b600052602260045260246000fd5b50919050565b610205806102f76000396000f3fe6080604052600436106100355760003560e01c80631e93b0f11461003e5780638323075714610062578063ab53f2c61461007757005b3661003c57005b005b34801561004a57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561006e57600080fd5b5060015461004f565b34801561008357600080fd5b5061008c61009a565b604051610059929190610137565b6000606060005460028080546100af90610194565b80601f01602080910402602001604051908101604052809291908181526020018280546100db90610194565b80156101285780601f106100fd57610100808354040283529160200191610128565b820191906000526020600020905b81548152906001019060200180831161010b57829003601f168201915b50505050509050915091509091565b82815260006020604081840152835180604085015260005b8181101561016b5785810183015185820160600152820161014f565b8181111561017d576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806101a857607f821691505b602082108114156101c957634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212207b926ea3824fd9f6ae2afcae583f9fca03236ac6f4014bd84996bbea88e0eda064736f6c63430008090033`,
  BytecodeLen: 1276,
  Which: `oD`,
  version: 5,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Gig": Gig,
  "Sponsor": Sponsor
  };
export const _APIs = {
  };
