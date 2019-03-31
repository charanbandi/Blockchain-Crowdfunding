const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile.js');
const provider = new HDWalletProvider(
  'about cluster artist talk gain bronze tattoo undo raise legal pair tail',
  'https://rinkeby.infura.io/v3/1332be8e1dce440583bd523235193bea'
);

const web3 = new Web3(provider);
const deploy = async () =>{
// var defaultAccount = web3.eth.defaultAccount;
//console.log(defaultAccount);
// set the default account
//web3.eth.defaultAccount = '0x519943C3589f371202Fa02DC3e3b56aE7Ee6D69C';
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
  console.log('Contract is deployed by the manager with address ', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data : '0x' + bytecode})
  .send({gas : '2000000', from : accounts[0]})

  console.log('Contract deployed to address', result.options.address);
  //0x0B09eD41f2D62d1b08447B0B02329D2A9dD3Bb79
}

deploy();
