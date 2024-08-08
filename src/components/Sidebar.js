// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaPen, FaGraduationCap, FaSignOutAlt, FaChalkboardTeacher } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ role }) => {
  return (
    <div className="sidebar">
      {/* <div className="logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div> */}
      <Link to="/dashboard" className="link"><FaBook /> Dashboard</Link>
      {role === 'student' && (
        <>
          <Link to="/attempt-paper" className="link"><FaPen /> Attempt Paper</Link>
          <Link to="/take-tests" className="link"><FaGraduationCap /> Take Tests</Link>
          <Link to="/learning-resources" className="link"><FaBook /> Learning Resources</Link>
        </>
      )}
      {role === 'professor' && (
        <>
          <Link to="/add-paper" className="link"><FaPen /> Add Paper</Link>
          <Link to="/sample-tests" className="link"><FaGraduationCap /> Sample Tests</Link>
          <Link to="/add-learning-resources" className="link"><FaBook /> Add Learning Resources</Link>
        </>
      )}
      {role === 'admin' && (
        <>
          <Link to="/approve-papers" className="link"><FaChalkboardTeacher /> Approve Papers</Link>
        </>
      )}
      <Link to="/logout" className="link"><FaSignOutAlt /> Logout</Link>
    </div>
  );
};

export default Sidebar;
