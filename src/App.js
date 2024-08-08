// src/components/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AttemptPaper from './components/AttemptPaper';
import TakeTests from './components/TakeTests';
import LearningResources from './components/LearningResources';
import AddPaper from './components/AddPaper';
import SampleTests from './components/SampleTests';
// import AddLearningResources from './components/AddLearningResources';
import ApprovePapers from './components/Approvepaper';
import Logout from './components/Logout';
import Registration from './components/Registration';
import StudentDashboard from './components/StudentDashboard';
import './App.css';

const App = () => {
  const role = "student"; // Replace this with actual role logic

  return (
    <Router>
      <div className="app">
        <Sidebar role={role} />
        <div className="main-content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Registration />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path='/student-dashboard' element={<StudentDashboard/>} />
              <Route path="/attempt-paper" element={<AttemptPaper />} />
              <Route path="/take-tests" element={<TakeTests />} />
              <Route path="/learning-resources" element={<LearningResources />} />
              <Route path="/add-paper" element={<AddPaper />} />
              <Route path="/sample-tests" element={<SampleTests />} />
              {/* <Route path="/add-learning-resources" element={<AddLearningResources />} /> */}
              <Route path="/approve-papers" element={<ApprovePapers />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
