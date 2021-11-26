// Automatically generated with Reach 0.1.7 (b34d92ae)
/* eslint-disable */
export const _version = '0.1.7';
export const _versionHash = '0.1.7 (b34d92ae)';
export const _backendVersion = 6;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc3 = stdlib.T_Object({
    duration: ctc1,
    goal: ctc1,
    name: ctc2
    });
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc3, ctc1, ctc1]
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
export async function Contributor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc2 = stdlib.T_Object({
    duration: ctc0,
    goal: ctc0,
    name: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  
  
  const v124 = stdlib.protect(ctc0, interact.contribution, 'for Contributor\'s interact field contribution');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc2],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v129], secs: v131, time: v130, didSend: v28, from: v128 } = txn1;
  ;
  let v134 = true;
  let v137 = v130;
  let v139 = stdlib.checkedBigNumberify('./index.rsh:25:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    const v143 = v129.goal;
    const v144 = stdlib.lt(v139, v143);
    const v145 = v134 ? v144 : false;
    
    return v145;})()) {
    const v146 = v129.duration;
    const v148 = stdlib.add(v137, v146);
    let v152;
    const v153 = stdlib.protect(ctc3, await interact.getWillContribute(), {
      at: './index.rsh:42:48:application',
      fs: ['at ./index.rsh:38:48:application call to [unknown function] (defined at: ./index.rsh:41:18:function exp)', 'at ./index.rsh:38:48:application call to [unknown function] (defined at: ./index.rsh:38:48:function exp)'],
      msg: 'getWillContribute',
      who: 'Contributor'
      });
    if (v153) {
      const v154 = {
        msg: v124,
        when: true
        };
      v152 = v154;
      }
    else {
      const v155 = {
        msg: stdlib.checkedBigNumberify('./index.rsh:45:36:decimal', stdlib.UInt_max, 0),
        when: false
        };
      v152 = v155;
      }
    const v156 = v152.when;
    const v157 = v152.msg;
    
    const txn2 = await (ctc.sendrecv({
      args: [v128, v129, v139, v148, v157],
      evt_cnt: 1,
      funcNum: 2,
      lct: v137,
      onlyIf: v156,
      out_tys: [ctc0],
      pay: [v157, []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v159], secs: v161, time: v160, didSend: v69, from: v158 } = txn2;
        
        const v163 = stdlib.add(v139, v159);
        sim_r.txns.push({
          amt: v159,
          kind: 'to',
          tok: undefined
          });
        
        const cv134 = true;
        const cv137 = v160;
        const cv139 = v163;
        
        await (async () => {
          const v134 = cv134;
          const v137 = cv137;
          const v139 = cv139;
          
          if (await (async () => {
            const v143 = v129.goal;
            const v144 = stdlib.lt(v139, v143);
            const v145 = v134 ? v144 : false;
            
            return v145;})()) {
            const v146 = v129.duration;
            const v148 = stdlib.add(v137, v146);
            sim_r.isHalt = false;
            }
          else {
            const v182 = stdlib.sub(v139, v139);
            sim_r.txns.push({
              amt: v139,
              kind: 'from',
              to: v128,
              tok: undefined
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v148],
      tys: [ctc5, ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      stdlib.protect(ctc4, await interact.reportTimeout(), {
        at: './index.rsh:1:39:application',
        fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:58:31:application call to "liftedInteract" (defined at: ./index.rsh:58:31:application)', 'at ./index.rsh:38:48:application call to [unknown function] (defined at: ./index.rsh:57:29:function exp)'],
        msg: 'reportTimeout',
        who: 'Contributor'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v128, v129, v139, v148],
        evt_cnt: 0,
        funcNum: 3,
        lct: v137,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v173, time: v172, didSend: v93, from: v171 } = txn3;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv134 = false;
          const cv137 = v172;
          const cv139 = v139;
          
          await (async () => {
            const v134 = cv134;
            const v137 = cv137;
            const v139 = cv139;
            
            if (await (async () => {
              const v143 = v129.goal;
              const v144 = stdlib.lt(v139, v143);
              const v145 = v134 ? v144 : false;
              
              return v145;})()) {
              const v146 = v129.duration;
              const v148 = stdlib.add(v137, v146);
              sim_r.isHalt = false;
              }
            else {
              const v182 = stdlib.sub(v139, v139);
              sim_r.txns.push({
                amt: v139,
                kind: 'from',
                to: v128,
                tok: undefined
                });
              
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc5, ctc2, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v173, time: v172, didSend: v93, from: v171 } = txn3;
      ;
      const cv134 = false;
      const cv137 = v172;
      const cv139 = v139;
      
      v134 = cv134;
      v137 = cv137;
      v139 = cv139;
      
      continue;
      }
    else {
      const {data: [v159], secs: v161, time: v160, didSend: v69, from: v158 } = txn2;
      const v163 = stdlib.add(v139, v159);
      ;
      stdlib.protect(ctc4, await interact.reportContribution(v158, v159, v163, v137), {
        at: './index.rsh:52:38:application',
        fs: ['at ./index.rsh:51:15:application call to [unknown function] (defined at: ./index.rsh:51:19:function exp)', 'at ./index.rsh:38:48:application call to [unknown function] (defined at: ./index.rsh:49:23:function exp)'],
        msg: 'reportContribution',
        who: 'Contributor'
        });
      
      const cv134 = true;
      const cv137 = v160;
      const cv139 = v163;
      
      v134 = cv134;
      v137 = cv137;
      v139 = cv139;
      
      continue;}
    
    }
  const v182 = stdlib.sub(v139, v139);
  ;
  stdlib.protect(ctc4, await interact.reportTransfer(v139, v128), {
    at: './index.rsh:1:39:application',
    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:65:28:application call to "liftedInteract" (defined at: ./index.rsh:65:28:application)'],
    msg: 'reportTransfer',
    who: 'Contributor'
    });
  
  stdlib.protect(ctc4, await interact.reportBalance(v182), {
    at: './index.rsh:1:39:application',
    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:68:27:application call to "liftedInteract" (defined at: ./index.rsh:68:27:application)'],
    msg: 'reportBalance',
    who: 'Contributor'
    });
  
  stdlib.protect(ctc4, await interact.reportExit(), {
    at: './index.rsh:1:39:application',
    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:69:24:application call to "liftedInteract" (defined at: ./index.rsh:69:24:application)'],
    msg: 'reportExit',
    who: 'Contributor'
    });
  
  return;
  
  
  };
export async function Fundraiser(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Fundraiser expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Fundraiser expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc2 = stdlib.T_Object({
    duration: ctc0,
    goal: ctc0,
    name: ctc1
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v121 = stdlib.protect(ctc0, interact.contractDuration, 'for Fundraiser\'s interact field contractDuration');
  const v122 = stdlib.protect(ctc0, interact.fundraisingGoal, 'for Fundraiser\'s interact field fundraisingGoal');
  const v123 = stdlib.protect(ctc1, interact.projectName, 'for Fundraiser\'s interact field projectName');
  
  const v127 = {
    duration: v121,
    goal: v122,
    name: v123
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v127],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:35:5:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v129], secs: v131, time: v130, didSend: v28, from: v128 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      
      const v134 = true;
      const v137 = v130;
      const v139 = stdlib.checkedBigNumberify('./index.rsh:25:11:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        const v143 = v129.goal;
        const v144 = stdlib.lt(v139, v143);
        const v145 = v134 ? v144 : false;
        
        return v145;})()) {
        const v146 = v129.duration;
        const v148 = stdlib.add(v137, v146);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: v139,
          kind: 'from',
          to: v128,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v129], secs: v131, time: v130, didSend: v28, from: v128 } = txn1;
  ;
  stdlib.protect(ctc3, await interact.reportDone(), {
    at: './index.rsh:1:39:application',
    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:36:24:application call to "liftedInteract" (defined at: ./index.rsh:36:24:application)'],
    msg: 'reportDone',
    who: 'Fundraiser'
    });
  
  let v134 = true;
  let v137 = v130;
  let v139 = stdlib.checkedBigNumberify('./index.rsh:25:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    const v143 = v129.goal;
    const v144 = stdlib.lt(v139, v143);
    const v145 = v134 ? v144 : false;
    
    return v145;})()) {
    const v146 = v129.duration;
    const v148 = stdlib.add(v137, v146);
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc0],
      timeoutAt: ['time', v148],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v128, v129, v139, v148],
        evt_cnt: 0,
        funcNum: 3,
        lct: v137,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v173, time: v172, didSend: v93, from: v171 } = txn3;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv134 = false;
          const cv137 = v172;
          const cv139 = v139;
          
          await (async () => {
            const v134 = cv134;
            const v137 = cv137;
            const v139 = cv139;
            
            if (await (async () => {
              const v143 = v129.goal;
              const v144 = stdlib.lt(v139, v143);
              const v145 = v134 ? v144 : false;
              
              return v145;})()) {
              const v146 = v129.duration;
              const v148 = stdlib.add(v137, v146);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v139,
                kind: 'from',
                to: v128,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc4, ctc2, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v173, time: v172, didSend: v93, from: v171 } = txn3;
      ;
      const cv134 = false;
      const cv137 = v172;
      const cv139 = v139;
      
      v134 = cv134;
      v137 = cv137;
      v139 = cv139;
      
      continue;
      }
    else {
      const {data: [v159], secs: v161, time: v160, didSend: v69, from: v158 } = txn2;
      const v163 = stdlib.add(v139, v159);
      ;
      const cv134 = true;
      const cv137 = v160;
      const cv139 = v163;
      
      v134 = cv134;
      v137 = cv137;
      v139 = cv139;
      
      continue;}
    
    }
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
int 8
extract_uint64
store 2
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
int 80
==
assert
dup
store 255
pop
// "CheckPay"
// "./index.rsh:35:5:dot"
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
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l1_checkTxnK:
pop
// "CheckPay"
// "./index.rsh:35:5:dot"
// "[]"
txn Sender
load 255
concat
int 1
itob // bool
substring 7 8
global Round
itob
concat
int 8
bzero
concat
b loopBody1
l0_afterHandler0:
l2_afterHandler1:
// Handler 2
dup
int 2
==
bz l3_afterHandler2
pop
// check step
int 3
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
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
extract 32 80
store 254
dup
int 112
extract_uint64
store 253
dup
int 120
extract_uint64
store 252
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 251
pop
global Round
load 252
<
assert
// "CheckPay"
// "./index.rsh:38:48:dot"
// "[]"
load 251
dup
bz l4_checkTxnK
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
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l4_checkTxnK:
pop
load 255
load 254
concat
int 1
itob // bool
substring 7 8
global Round
itob
concat
load 253
load 251
+
itob
concat
b loopBody1
l3_afterHandler2:
// Handler 3
dup
int 3
==
bz l5_afterHandler3
pop
// check step
int 3
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
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
extract 32 80
store 254
dup
int 112
extract_uint64
store 253
dup
int 120
extract_uint64
store 252
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 252
>=
assert
// "CheckPay"
// "./index.rsh:59:15:dot"
// "[at ./index.rsh:38:48:application call to [unknown function] (defined at: ./index.rsh:57:29:function exp)]"
load 255
load 254
concat
int 0
itob // bool
substring 7 8
global Round
itob
concat
load 253
itob
concat
b loopBody1
l5_afterHandler3:
int 0
assert
loopBody1:
dup
extract 0 1
btoi
store 255
dup
int 1
extract_uint64
store 254
dup
int 9
extract_uint64
store 253
pop
dup
extract 0 32
store 252
dup
extract 32 80
store 251
pop
load 255
load 253
load 251
int 8
extract_uint64
<
&&
bz l6_ifF
load 254
load 251
int 0
extract_uint64
+
store 250
load 252
load 251
concat
load 253
itob
concat
load 250
itob
concat
int 1
bzero
dig 1
extract 0 127
app_global_put
byte base64(AQ==)
dig 1
extract 127 1
app_global_put
pop
int 3
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l6_ifF:
load 253
dup
bz l7_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 252
itxn_field Receiver
itxn_submit
int 0
l7_makeTxnK:
pop
int 0
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
global CreatorAddress
itxn_field CloseRemainderTo
global CurrentApplicationAddress
itxn_field Receiver
itxn_submit
int 0
l8_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
updateState:
byte base64()
load 1
itob
load 2
itob
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
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 128,
  unsupported: [],
  version: 6
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
                "name": "v129",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
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
                "name": "v129",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
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
                "internalType": "uint256",
                "name": "v159",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
                "internalType": "uint256",
                "name": "v159",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200105c3803806200105c8339810160408190526200002691620004e7565b60008055436003556040805182518152602080840151518051828401528082015183850152830151805160608401520151608082015290517f5c513665a4561ae53492eacbeda7ad629d1f5ec9582748d2a17ecf2a644aef599181900360a00190a16200009634156007620000df565b620000a06200027d565b8051339052602080830151518251820152808201805160019052805143920191909152516000604090910152620000d78162000109565b5050620005f1565b81620001055760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160208101909152600081526020820151516200012b57600062000143565b81600001516020015160200151826020015160400151105b15620002205781516020908101515181840151909101516200016691906200058d565b81526200017262000303565b8251516001600160a01b031680825283516020908101518184019081528186015160409081015181860190815286516060808801918252600360005543600155835180870197909752935180518785015280860151948701949094529290910151805160808601529092015160a0840152905160c08301525160e082015261010001604051602081830303815290604052600290805190602001906200021a92919062000366565b50505050565b815151602083015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801562000264573d6000803e3d6000fd5b50600080805560018190556200010590600290620003f5565b6040518060400160405280620002db604051806040016040528060006001600160a01b03168152602001620002fe60408051606081018252600080825260208083018290528351808501855282815290810191909152909182015290565b815260408051606081018252600080825260208281018290529282015291015290565b905290565b604051806080016040528060006001600160a01b031681526020016200035260408051606081018252600080825260208083018290528351808501855282815290810191909152909182015290565b815260200160008152602001600081525090565b8280546200037490620005b4565b90600052602060002090601f016020900481019282620003985760008555620003e3565b82601f10620003b357805160ff1916838001178555620003e3565b82800160010185558215620003e3579182015b82811115620003e3578251825591602001919060010190620003c6565b50620003f192915062000437565b5090565b5080546200040390620005b4565b6000825580601f1062000414575050565b601f01602090049060005260206000209081019062000434919062000437565b50565b5b80821115620003f1576000815560010162000438565b604080519081016001600160401b03811182821017156200047f57634e487b7160e01b600052604160045260246000fd5b60405290565b604051602081016001600160401b03811182821017156200047f57634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b03811182821017156200047f57634e487b7160e01b600052604160045260246000fd5b600081830360a0811215620004fb57600080fd5b620005056200044e565b835181526080601f19830112156200051c57600080fd5b6200052662000485565b62000530620004b6565b60208601518152604086015160208201526040605f19850112156200055457600080fd5b6200055e6200044e565b935060608601518452608086015160208501528360408201528082525080602083015250809250505092915050565b60008219821115620005af57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620005c957607f821691505b60208210811415620005eb57634e487b7160e01b600052602260045260246000fd5b50919050565b610a5b80620006016000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f11461005457806345f703961461007857806373b4522c1461008b578063832307571461009e578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b6100526100863660046107cf565b6100d6565b6100526100993660046107cf565b610260565b3480156100aa57600080fd5b50600154610065565b3480156100bf57600080fd5b506100c86103cd565b60405161006f9291906107f2565b6100e6600360005414600961046a565b610100813515806100f957506001548235145b600a61046a565b6000808055600280546101129061084f565b80601f016020809104026020016040519081016040528092919081815260200182805461013e9061084f565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a3919061091d565b90506101b681606001514310600b61046a565b6040805183358152602080850135908201527fa8de7fa57e96b1b344028051973cc20a5275cd64ccacf1c4ebc1e38bc2945cb6910160405180910390a161020434602084013514600861046a565b61020c6105fb565b815181516001600160a01b0390911690526020808301518251820152808201805160019052514390820152604083015161024991850135906109d5565b60208201516040015261025b81610493565b505050565b610270600360005414600d61046a565b61028a8135158061028357506001548235145b600e61046a565b60008080556002805461029c9061084f565b80601f01602080910402602001604051908101604052809291908181526020018280546102c89061084f565b80156103155780601f106102ea57610100808354040283529160200191610315565b820191906000526020600020905b8154815290600101906020018083116102f857829003601f168201915b505050505080602001905181019061032d919061091d565b90506103418160600151431015600f61046a565b7f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c098260405161037091906109fb565b60405180910390a16103843415600c61046a565b61038c6105fb565b815181516001600160a01b03909116905260208083015182518201528082018051600090528051439201919091526040808401519151015261025b81610493565b6000606060005460028080546103e29061084f565b80601f016020809104026020016040519081016040528092919081815260200182805461040e9061084f565b801561045b5780601f106104305761010080835404028352916020019161045b565b820191906000526020600020905b81548152906001019060200180831161043e57829003601f168201915b50505050509050915091509091565b8161048f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160208101909152600081526020820151516104b35760006104cb565b81600001516020015160200151826020015160400151105b156105a15781516020908101515181840151909101516104eb91906109d5565b81526104f561067f565b8251516001600160a01b031680825283516020908101518184019081528186015160409081015181860190815286516060808801918252600360005543600155835180870197909752935180518785015280860151948701949094529290910151805160808601529092015160a0840152905160c08301525160e0820152610100016040516020818303038152906040526002908051906020019061059b9291906106e1565b50505050565b815151602083015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156105e4573d6000803e3d6000fd5b506000808055600181905561048f90600290610765565b6040518060400160405280610657604051806040016040528060006001600160a01b0316815260200161067a60408051606081018252600080825260208083018290528351808501855282815290810191909152909182015290565b815260408051606081018252600080825260208281018290529282015291015290565b905290565b604051806080016040528060006001600160a01b031681526020016106cd60408051606081018252600080825260208083018290528351808501855282815290810191909152909182015290565b815260200160008152602001600081525090565b8280546106ed9061084f565b90600052602060002090601f01602090048101928261070f5760008555610755565b82601f1061072857805160ff1916838001178555610755565b82800160010185558215610755579182015b8281111561075557825182559160200191906001019061073a565b506107619291506107a2565b5090565b5080546107719061084f565b6000825580601f10610781575050565b601f01602090049060005260206000209081019061079f91906107a2565b50565b5b8082111561076157600081556001016107a3565b6000604082840312156107c957600080fd5b50919050565b6000604082840312156107e157600080fd5b6107eb83836107b7565b9392505050565b82815260006020604081840152835180604085015260005b818110156108265785810183015185820160600152820161080a565b81811115610838576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061086357607f821691505b602082108114156107c957634e487b7160e01b600052602260045260246000fd5b6040516080810167ffffffffffffffff811182821017156108b557634e487b7160e01b600052604160045260246000fd5b60405290565b6040516060810167ffffffffffffffff811182821017156108b557634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156108b557634e487b7160e01b600052604160045260246000fd5b600081830360e081121561093057600080fd5b610938610884565b83516001600160a01b038116811461094f57600080fd5b81526080601f198301121561096357600080fd5b61096b6108bb565b60208501518152604085015160208201526040605f198401121561098e57600080fd5b6109966108ec565b925060608501518352608085015160208401528260408201528060208301525060a0840151604082015260c08401516060820152809250505092915050565b600082198211156109f657634e487b7160e01b600052601160045260246000fd5b500190565b81358152604081016020830135801515808214610a1757600080fd5b80602085015250509291505056fea2646970667358221220defc37ac9bd03ab610d10954d5c052c6cb8aadbaf0ba476b332c3bcc23b6d42f64736f6c63430008090033`,
  BytecodeLen: 4188,
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
  "Contributor": Contributor,
  "Fundraiser": Fundraiser
  };
export const _APIs = {
  };
