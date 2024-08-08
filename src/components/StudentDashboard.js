// src/components/StudentDashboard.js

import React from 'react';
import Sidebar from './Sidebar';

const StudentDashboard = () => {
  return (
    <div style={styles.dashboardContainer}>
      <Sidebar role="student" />
      <div style={styles.content}>
        <h1>Student Dashboard</h1>
        {/* Add content for student's dashboard */}
      </div>
    </div>
  );
};

const styles = {
  dashboardContainer: {
    display: 'flex'
  },
  content: {
    marginLeft: '220px',
    padding: '20px'
  }
};

export default StudentDashboard;
