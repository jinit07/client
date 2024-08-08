// src/components/Dashboard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ role }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (role === 'student') {
      navigate('/student-dashboard');
    } else if (role === 'professor') {
      navigate('/professor-dashboard');
    } else if (role === 'admin') {
      navigate('/admin-dashboard');
    }
  }, [role, navigate]);

  return <div>Loading Dashboard...</div>;
};

export default Dashboard;
