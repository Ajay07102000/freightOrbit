import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import "./Register.css"; // Import CSS for any additional styles

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="register-container">
      {/* Background Airplane Outline */}
      <div className="backgroundIcon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={0.1}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 16l7-7 5 5 7-7m-7 7l7-7M2 16h20" />
        </svg>
      </div>

      {/* Registration Card */}
      <div className="register-card">
        {/* Logo */}
        <div className="logo-container">
          <img src="/logo.jpg" alt="Freight Orbit Logo" className="logo" />
          <h1 className="title">
            <span className="freight-text">Freight</span>Orbit
          </h1>
        </div>

        {/* Heading */}
        <h2 className="register-heading">Register with FreightOrbit</h2>
        <p className="register-subheading">See what is going on with your business</p>

        {/* Input Fields */}
        <form className="register-form">
          <div className="input-group">
            <input type="text" placeholder="Enter full name" className="input-field" />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Enter email or phone" className="input-field" />
          </div>
          <div className="input-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="XXXXXXXX"
              className="input-field"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="eye-icon">
              {showPassword ? <EyeOffIcon className="icon" /> : <EyeIcon className="icon" />}
            </button>
          </div>
          <div className="input-group password-group">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="XXXXXXXX"
              className="input-field"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="eye-icon"
            >
              {showConfirmPassword ? <EyeOffIcon className="icon" /> : <EyeIcon className="icon" />}
            </button>
          </div>

          {/* Register Button */}
          <button type="submit" className="register-button">
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="login-link">
          Already have an account? <Link to="/login">Log In</Link>
        </p>

        {/* Terms and Privacy Notice */}
        <p className="terms-text">
          By clicking Free Sign Up or registering through a third party, you accept the FreightOrbit{" "}
          <Link to="/terms">Terms of Service</Link> and acknowledge the{" "}
          <Link to="/privacy">Privacy Policy</Link> and <Link to="/cookies">Cookie Policy</Link>.
        </p>

        {/* Footer */}
        <footer className="footer">© 2023 Krivitech LLC. All rights reserved</footer>
      </div>
    </div>
  );
}

export default Register;