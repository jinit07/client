// src/components/ProfessorDashboard.js

import React from 'react';
import Sidebar from './Sidebar';

const ProfessorDashboard = () => {
  return (
    <div style={styles.dashboardContainer}>
      <Sidebar role="professor" />
      <div style={styles.content}>
        <h1>Professor Dashboard</h1>
        {/* Add content for professor's dashboard */}
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

export default ProfessorDashboard;
