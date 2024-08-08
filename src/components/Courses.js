// src/components/Courses.js

import React, { useState, useEffect } from 'react';
import { web3, contract } from '../utils/web3';
import './Courses.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await contract.methods.getAvailableCourses().call();
      setCourses(courses);
    };

    fetchCourses();
  }, []);

  return (
    <div className="courses">
      <h1>Available Courses</h1>
      {courses.length > 0 ? (
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course.title}</li>
          ))}
        </ul>
      ) : (
        <p>No courses available</p>
      )}
    </div>
  );
};

export default Courses;
