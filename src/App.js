import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import StudentDashboard from './components/StudentDashboard';
import ProfessorDashboard from './components/ProfessorDashboard';
import AdminDashboard from './components/AdminDashboard';
import UploadPaper from './components/UploadPaper';
import ApprovePaper from './components/Approvepaper';
import Sidebar from './components/Sidebar';

function App() {
  const [role, setRole] = useState('');

  return (
    <Router>
      <div style={styles.app}>
        <Sidebar role={role} />
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard role={role} />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/professor-dashboard" element={<ProfessorDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/upload-paper" element={<UploadPaper />} />
          <Route path="/approve-paper" element={<ApprovePaper />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  app: {
    display: 'flex'
  }
};

export default App;
