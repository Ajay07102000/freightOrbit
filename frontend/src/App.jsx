import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserTypeSelection from './pages/auth/userTypeSelection/UserTypeSelection';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import CustomerDashboard from './pages/dashboard/customerDashboard/CustomerDashboard';


const App = () => {
  return (
    
    <Router>
      <Routes>
      <Route path="/" element={<UserTypeSelection/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/customer-dashboard" element={<CustomerDashboard/>} />

      </Routes>
    </Router>
  );
};

export default App;
