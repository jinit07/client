// src/components/AdminDashboard.js

import React from 'react';
import Sidebar from './Sidebar';

const AdminDashboard = () => {
  return (
    <div style={styles.dashboardContainer}>
      <Sidebar role="admin" />
      <div style={styles.content}>
        <h1>Admin Dashboard</h1>
        {/* Add content for admin's dashboard */}
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

export default AdminDashboard;
