// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ role }) => {
  return (
    <div style={styles.sidebar}>
      <Link to="/dashboard" style={styles.link}>Dashboard</Link>
      {role === 'student' && (
        <>
          <Link to="/attempt-paper" style={styles.link}>Attempt Paper</Link>
          <Link to="/take-tests" style={styles.link}>Take Tests</Link>
          <Link to="/learning-resources" style={styles.link}>Learning Resources</Link>
        </>
      )}
      {role === 'professor' && (
        <>
          <Link to="/add-paper" style={styles.link}>Add Paper</Link>
          <Link to="/sample-tests" style={styles.link}>Sample Tests</Link>
          <Link to="/add-learning-resources" style={styles.link}>Add Learning Resources</Link>
        </>
      )}
      {role === 'admin' && (
        <>
          <Link to="/approve-papers" style={styles.link}>Approve Papers</Link>
        </>
      )}
      <Link to="/logout" style={styles.link}>Logout</Link>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '200px',
    position: 'fixed',
    height: '100%',
    background: '#f0f0f0',
    paddingTop: '20px'
  },
  link: {
    display: 'block',
    color: '#000',
    padding: '10px',
    textDecoration: 'none'
  }
};

export default Sidebar;
