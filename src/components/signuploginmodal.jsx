// LoginModal.js
import React, { useState } from 'react';
import '../asset/css/signuploginmodal.css';

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Handle login logic
    console.log('Login:', email, password);

    // Clear form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className="company-name">The Game 11</h2>
        <h3 className="login-title">Login</h3>
        <form onSubmit={handleFormSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Login</button>
        </form>
        <div className="terms-section">
          <p>Terms and conditions</p>
          {/* Add your terms and conditions content here */}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
