import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Login.css";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-container">
      <div className="login-card">
      <div className="logo-container">
          <img src="/logo.jpg" alt="Freight Orbit Logo" className="logo" />
          <h1 className="title">
            <span className="freight-text">Freight</span>Orbit
          </h1>
        </div>
        <h2>Login to your Account</h2>
        <p className="subtext">See what is going on with your business</p>
        
        <form>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="hello@gmail.com" />
          </div>
          
          <div className="input-group">
            <FaLock className="icon" />
            <input type="password" placeholder="XXXXXXXX" />
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#">Forget Password?</a>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="divider">or Sign in with Email</div>

        <button className="google-btn" onClick={() => loginWithRedirect()}>
          <img src="/google-icon.png" alt="Google" className="google-icon" />
          Continue with Google
        </button>

        <p className="register-text">
          Not Registered Yet? <a href="#">Create an account</a>
        </p>

        <p className="footer-text">© 2023 Krivitech LLC. All rights reserved</p>
      </div>
    </div>
  );
};

export default Login;
