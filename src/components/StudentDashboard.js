// // src/components/StudentDashboard.js

// import React, { useEffect, useState } from 'react';
// import Sidebar from './Sidebar';
// import './StudentDashboard.css';
// import { web3, contract } from '../utils/web3';

// const StudentDashboard = () => {
//   const [studentDetails, setStudentDetails] = useState({});
//   const [testsTaken, setTestsTaken] = useState([]);
//   const [coursesCompleted, setCoursesCompleted] = useState([]);

//   useEffect(() => {
//     const fetchStudentData = async () => {
//       const accounts = await web3.eth.getAccounts();
//       const account = accounts[0];

//       // Fetch details from the contract (assuming methods exist in the contract)
//       const student = await contract.methods.getStudentDetails(account).call();
//       const takenTests = await contract.methods.getTestsTakenByStudent(account).call();
//       const completedCourses = await contract.methods.getCoursesCompletedByStudent(account).call();

//       setStudentDetails(student);
//       setTestsTaken(takenTests);
//       setCoursesCompleted(completedCourses);
//     };

//     fetchStudentData();
//   }, []);

//   return (
//     <div className="dashboardContainer">
//       <Sidebar role="student" />
//       <div className="content">
//         <h1>Student Dashboard</h1>
//         <div className="section">
//           <h2>Student Details</h2>
//           <p>Name: {studentDetails.name || 'None'}</p>
//           <p>Enrolled Courses: {studentDetails.enrolledCourses || 'None'}</p>
//         </div>
//         <div className="section">
//           <h2>Tests Taken</h2>
//           {testsTaken.length > 0 ? (
//             <ul>
//               {testsTaken.map((test, index) => (
//                 <li key={index}>{test.name}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>No tests taken</p>
//           )}
//         </div>
//         <div className="section">
//           <h2>Courses Completed</h2>
//           {coursesCompleted.length > 0 ? (
//             <ul>
//               {coursesCompleted.map((course, index) => (
//                 <li key={index}>{course.title}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>No courses completed</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;
// src/components/StudentDashboard.js

import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import './StudentDashboard.css';
import { web3, contract } from '../utils/web3';

const StudentDashboard = () => {
  const [studentDetails, setStudentDetails] = useState({});
  const [testsTaken, setTestsTaken] = useState([]);
  const [coursesCompleted, setCoursesCompleted] = useState([]);

  useEffect(() => {
    const fetchStudentData = async () => {
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];

      // Test values
      const student = {
        name: 'Ankush Pandey',
        enrolledCourses: 'Math, Science, History',
      };
      const takenTests = [
        { name: 'Math Test 1' },
        { name: 'Science Test 2' },
      ];
      const completedCourses = [
        { title: 'Math 101' },
        { title: 'Science 201' },
      ];

      // Set test values
      setStudentDetails(student);
      setTestsTaken(takenTests);
      setCoursesCompleted(completedCourses);

      // Uncomment the following lines to fetch real data from the contract
      // const student = await contract.methods.getStudentDetails(account).call();
      // const takenTests = await contract.methods.getTestsTakenByStudent(account).call();
      // const completedCourses = await contract.methods.getCoursesCompletedByStudent(account).call();
      // setStudentDetails(student);
      // setTestsTaken(takenTests);
      // setCoursesCompleted(completedCourses);
    };

    fetchStudentData();
  }, []);

  return (
    <div className="dashboardContainer">
      <Sidebar role="student" />
      <div className="content">
        <h1>Student Dashboard</h1>
        <div className="section">
          <h2>Student Details</h2>
          <p>Name: {studentDetails.name || 'None'}</p>
          <p>Enrolled Courses: {studentDetails.enrolledCourses || 'None'}</p>
        </div>
        <div className="section">
          <h2>Tests Taken</h2>
          {testsTaken.length > 0 ? (
            <ul>
              {testsTaken.map((test, index) => (
                <li key={index}>{test.name}</li>
              ))}
            </ul>
          ) : (
            <p>No tests taken</p>
          )}
        </div>
        <div className="section">
          <h2>Courses Completed</h2>
          {coursesCompleted.length > 0 ? (
            <ul>
              {coursesCompleted.map((course, index) => (
                <li key={index}>{course.title}</li>
              ))}
            </ul>
          ) : (
            <p>No courses completed</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
