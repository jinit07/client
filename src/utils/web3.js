
import Web3 from 'web3';
import ContractABI from './Syndicate.json'; // Import the generated ABI JSON file

const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');

const contractAddress = '0x054BEcF68a2dB4DdeF91B52A4e254405C9Edf873';

const contract = new web3.eth.Contract(ContractABI.abi, contractAddress);

export { web3, contract };
