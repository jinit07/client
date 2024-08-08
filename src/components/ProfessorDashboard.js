// src/components/ProfessorDashboard.js

import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import './ProfessorDashboard.css';
import { web3, contract } from '../utils/web3';

const ProfessorDashboard = () => {
  const [professorDetails, setProfessorDetails] = useState({});
  const [testsCreated, setTestsCreated] = useState([]);
  const [papersSubmitted, setPapersSubmitted] = useState([]);
  const [coursesUploaded, setCoursesUploaded] = useState([]);

  useEffect(() => {
    const fetchProfessorData = async () => {
      // Example logic to fetch professor data from blockchain
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];

      // Fetch details from the contract (assuming methods exist in the contract)
      // This is a placeholder example, replace with actual contract method calls
      const professor = await contract.methods.getProfessorDetails(account).call();
      const createdTests = await contract.methods.getTestsByProfessor(account).call();
      const submittedPapers = await contract.methods.getSubmittedPapers(account).call();
      const uploadedCourses = await contract.methods.getCoursesByProfessor(account).call();

      setProfessorDetails(professor);
      setTestsCreated(createdTests);
      setPapersSubmitted(submittedPapers);
      setCoursesUploaded(uploadedCourses);
    };

    fetchProfessorData();
  }, []);

  return (
    <div className="dashboardContainer">
      <Sidebar role="professor" />
      <div className="content">
        <h1>Professor Dashboard</h1>
        <div className="section">
          <h2>Professor Details</h2>
          <p>Name: {professorDetails.name || 'None'}</p>
          <p>Department: {professorDetails.department || 'None'}</p>
        </div>
        <div className="section">
          <h2>Tests Created</h2>
          {testsCreated.length > 0 ? (
            <ul>
              {testsCreated.map((test, index) => (
                <li key={index}>{test.name}</li>
              ))}
            </ul>
          ) : (
            <p>No tests created</p>
          )}
        </div>
        <div className="section">
          <h2>Papers Submitted to Admin</h2>
          {papersSubmitted.length > 0 ? (
            <ul>
              {papersSubmitted.map((paper, index) => (
                <li key={index}>{paper.title}</li>
              ))}
            </ul>
          ) : (
            <p>No papers submitted</p>
          )}
        </div>
        <div className="section">
          <h2>Courses Uploaded</h2>
          {coursesUploaded.length > 0 ? (
            <ul>
              {coursesUploaded.map((course, index) => (
                <li key={index}>{course.title}</li>
              ))}
            </ul>
          ) : (
            <p>No courses uploaded</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessorDashboard;
