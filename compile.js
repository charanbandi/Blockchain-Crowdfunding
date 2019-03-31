const path = require('path');
const fs = require('fs');
const solc = require('solc');

const LotteryPath = path.resolve(__dirname,'contracts','Lottery.sol');
const source = fs.readFileSync(LotteryPath, 'utf8');

console.log(solc.compile(source,1).contracts[':Lottery']);
/*console.log(JSON.parse(solc.compile(JSON.stringify({
  language: 'Solidity',
  sources: {
    'lottery.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['evm', 'bytecode'],
      },
    },
  },
}))).contracts['lottery.sol'].Lottery);*/
