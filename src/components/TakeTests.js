// src/components/TakeTests.js

import React, { useState, useEffect } from 'react';
import { web3, contract } from '../utils/web3';
import './TakeTests.css';

const TakeTests = () => {
  const [tests, setTests] = useState([]);
  const [selectedTest, setSelectedTest] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const fetchTests = async () => {
      const tests = await contract.methods.getAvailableTests().call();
      setTests(tests);
    };

    fetchTests();
  }, []);

  const handleAnswerChange = (questionIndex, e) => {
    setAnswers({
      ...answers,
      [questionIndex]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    try {
      await contract.methods.submitTest(selectedTest.id, answers).send({ from: account });
      alert('Test submitted successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="take-tests">
      <h1>Take Tests</h1>
      <div className="tests-list">
        {tests.length > 0 ? (
          tests.map((test, index) => (
            <button key={index} onClick={() => setSelectedTest(test)}>
              {test.name}
            </button>
          ))
        ) : (
          <p>No tests available</p>
        )}
      </div>

      {selectedTest && (
        <form onSubmit={handleSubmit} className="test-form">
          <h2>{selectedTest.name}</h2>
          {selectedTest.questions.map((question, qIndex) => (
            <div key={qIndex} className="question">
              <p>{question.text}</p>
              {question.options.map((option, oIndex) => (
                <label key={oIndex}>
                  <input
                    type="radio"
                    name={`question-${qIndex}`}
                    value={option}
                    onChange={(e) => handleAnswerChange(qIndex, e)}
                    required
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          <button type="submit" className="submit-button">Submit Test</button>
        </form>
      )}
    </div>
  );
};

export default TakeTests;
