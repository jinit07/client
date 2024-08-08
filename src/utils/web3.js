
import Web3 from 'web3';
import ContractABI from './Syndicate.json'; // Import the generated ABI JSON file

const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');

const contractAddress = '0x7d8fAfABaE0020deb5d6397B1ee72b8CF3f4550d';

const contract = new web3.eth.Contract(ContractABI.abi, contractAddress);

export { web3, contract };
