// src/components/ApprovePaper.js

import React, { useState } from 'react';
import { web3, contract } from '../utils/web3';
import './ApprovePaper.css';

const ApprovePaper = () => {
  const [paperHash, setPaperHash] = useState('');

  const handleChange = (e) => {
    setPaperHash(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.requestAccounts();
    const account = accounts[0];

    try {
      await contract.methods.approvePaper(web3.utils.keccak256(paperHash)).send({ from: account });
      alert('Paper approved successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" name="paperHash" placeholder="Paper Hash" onChange={handleChange} required className="input" />
      <button type="submit" className="button">Approve Paper</button>
    </form>
  );
};

export default ApprovePaper;
