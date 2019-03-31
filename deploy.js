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
  //console.log('Contract is deployed by the manager with address ', accounts[0]);
  //console.log('Attempting to deploy from account', accounts[0]);
}

deploy();
