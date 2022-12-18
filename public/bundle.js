var contractABI = [];
var contractAddress = '0x58ce59853F0Bb8bF96f3Bc4A21609AC04692e341';
var web3 = new Web3('http://127.0.0.1:9545/');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts()
.then(console.log);