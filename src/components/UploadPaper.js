// src/components/UploadPaper.js

import React, { useState } from 'react';
import { web3, contract } from '../utils/web3';
import './UploadPaper.css';

const UploadPaper = () => {
  const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''] }]);
  const [paperHash, setPaperHash] = useState('');

  const handleChange = (index, e) => {
    const newQuestions = [...questions];
    newQuestions[index][e.target.name] = e.target.value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, e) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = e.target.value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''] }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.requestAccounts();
    const account = accounts[0];

    // Here you would normally hash the paper content, for simplicity we use a static hash
    setPaperHash(web3.utils.keccak256(JSON.stringify(questions)));

    try {
      await contract.methods.uploadPaper(paperHash).send({ from: account });
      alert('Paper uploaded successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {questions.map((q, qIndex) => (
        <div key={qIndex}>
          <input
            type="text"
            name="question"
            placeholder="Question"
            value={q.question}
            onChange={(e) => handleChange(qIndex, e)}
            required
            className="input"
          />
          {q.options.map((option, oIndex) => (
            <input
              key={oIndex}
              type="text"
              name={`option${oIndex}`}
              placeholder={`Option ${oIndex + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(qIndex, oIndex, e)}
              required
              className="input"
            />
          ))}
          <button type="button" onClick={addQuestion} className="button">Add Question</button>
        </div>
      ))}
      <button type="submit" className="button">Submit Paper</button>
    </form>
  );
};

export default UploadPaper;
