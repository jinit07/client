import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { web3, contract } from '../utils/web3';

const Registration = () => {
  const [formData, setFormData] = useState({
    role: '',
    name: '',
    dob: '',
    college: '',
    designation: ''
  });
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const connectMetaMask = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setAccount(accounts[0]);
          console.log('Connected account:', accounts[0]);
        } catch (error) {
          console.error('Failed to connect MetaMask:', error);
        }
      } else {
        alert('Please install MetaMask to use this feature.');
      }
    };

    connectMetaMask();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { role, name, dob, college, designation } = formData;

    try {
      console.log('Submitting transaction with the following parameters:');
      console.log('Account:', account);
      console.log('Form Data:', formData);

      // Send transaction
      const transactionReceipt = await contract.methods
        .registerUser(role, name, dob, college, designation)
        .send({
          from: account,
          gas: 3000000,
          gasPrice: web3.utils.toWei('20', 'gwei')
        });

      console.log('Transaction successful:', transactionReceipt);

      // Post registration data to the backend
      const response = await axios.post('http://localhost:5000/api/auth/register', { address: account, role, name, dob, college, designation });
      console.log('Response from backend:', response.data);

      alert('User registered successfully');

      // Redirect based on role
      if (role === 'student') {
        navigate('/student-dashboard');
      } else if (role === 'professor') {
        navigate('/professor-dashboard');
      } else if (role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <input type="text" name="role" placeholder="Role" onChange={handleChange} required style={styles.input} />
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required style={styles.input} />
      <input type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} required style={styles.input} />
      <input type="text" name="college" placeholder="College" onChange={handleChange} required style={styles.input} />
      <input type="text" name="designation" placeholder="Designation" onChange={handleChange} required style={styles.input} />
      <button type="submit" style={styles.button}>Register</button>
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

export default Registration;
