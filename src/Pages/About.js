import React from 'react';
import './../styles/About.css';
import {  useNavigate } from 'react-router-dom';

const About = () => {
    const navigate=useNavigate()
  return (
    <div className="about-container">
    <div>
    <button className="back-button" onClick={()=>navigate(-1)}>Go Back</button>
      <h1>About Phoenix Todo Application</h1>

    </div>
      <p>
        This Todo application helps you manage your daily tasks efficiently. With features like task addition, deletion, and completion tracking, you can stay organized and ensure nothing important slips through the cracks.
      </p>
      <p>
        Built using React, this application showcases the use of state management, routing, and API interactions to create a seamless user experience. The intuitive interface allows for easy navigation and task management.
      </p>
      <p>
        Start managing your tasks today and boost your productivity!
      </p>
    </div>
  );
};

export default About;
