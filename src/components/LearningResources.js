// src/components/LearningResources.js

import React, { useState } from 'react';
import { web3, contract } from '../utils/web3';
import './LearningResources.css';

const LearningResources = () => {
  const [resource, setResource] = useState('');

  const handleChange = (e) => {
    setResource(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.requestAccounts();
    const account = accounts[0];

    try {
      // Assume `uploadResource` is a method in your smart contract
      await contract.methods.uploadResource(resource).send({ from: account });
      alert('Resource uploaded successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" name="resource" placeholder="Resource Link" onChange={handleChange} required className="input" />
      <button type="submit" className="button">Upload Resource</button>
    </form>
  );
};

export default LearningResources;
