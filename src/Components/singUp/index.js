// SignUp.js

import React, { useState } from 'react';
import './index.css'; // You can add the CSS here

const SignUp = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate the form
  const validateForm = () => {
    let isValid = true;
    let errors = {};

    // Name validation
    if (!formData.name) {
      errors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    // Confirm Password validation
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data submitted:', formData);
      // You can replace this with actual sign-up API call
    }
  };

  return (
    <div className="sign-up-container7">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <div className="input-container7">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <span className="error-message7">{errors.name}</span>}
        </div>

        {/* Email input */}
        <div className="input-container7">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error-message7">{errors.email}</span>}
        </div>

        {/* Password input */}
        <div className="input-container7">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        {/* Confirm Password input */}
        <div className="input-container7">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <span className="error-message7">{errors.confirmPassword}</span>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button7">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
