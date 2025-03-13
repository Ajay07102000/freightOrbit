import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserTypeSelection.css"; // Import CSS file
const UserTypeSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Background Airplane Outline */}
      <div className="background-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="0.2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 16l7-7 5 5 7-7m-7 7l7-7M2 16h20" />
        </svg>
      </div>

      {/* Card Container */}
      <div className="card">
        {/* Centered Logo Section */}
        <div className="logo-container">
          <img src="/logo.jpg" alt="Freight Orbit Logo" className="logo" />
          <span className="title">
            <span className="freight-text">Freight</span>Orbit
          </span>
        </div>

        {/* Heading */}
        <h2 className="heading">Select your user type</h2>
        <p className="subheading">Choose one and enter the dashboard</p>

        {/* New User Button - Navigates to Login Page */}
        <button className="new-user-btn" onClick={() => navigate("/login")}>
          New User 
        </button>

        {/* Separator */}
        <div className="separator-container">
          <div className="separator"></div>
          <span className="or-text">or</span>
          <div className="separator"></div>
        </div>

        {/* Existing User Button - Navigates to Register Page */}
        <button className="existing-user-btn" onClick={() => navigate("/register")}>
          Existing User 
        </button>
      </div>
    </div>
  );
};

export default UserTypeSelection;