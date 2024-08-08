// src/components/UploadPaper.js

import React, { useState } from 'react';
import { web3, contract } from '../utils/web3';

const UploadPaper = () => {
  const [paperHash, setPaperHash] = useState('');

  const handleChange = (e) => {
    setPaperHash(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.requestAccounts();
    const account = accounts[0];

    try {
      await contract.methods.uploadPaper(web3.utils.keccak256(paperHash)).send({ from: account });
      alert('Paper uploaded successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <input type="text" name="paperHash" placeholder="Paper Hash" onChange={handleChange} required />
      <button type="submit">Upload Paper</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: 'auto',
    marginTop: '50px'
  },
  input: {
    marginBottom: '10px',
    padding: '8px',
    fontSize: '16px'
  },
  button: {
    padding: '10px',
    background: '#4caf50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px'
  }
};

export default UploadPaper;
