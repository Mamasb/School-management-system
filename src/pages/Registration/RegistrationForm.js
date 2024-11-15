// RegistrationForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // For redirection after registration
import './styles.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    familyName: '',
    password: '',
    confirmPassword: '',
    userType: 'Baby Class', // Default
  });

  const navigate = useNavigate(); // For redirecting

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.firstName ||
      !formData.middleName ||
      !formData.familyName ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Store user's full name in localStorage
    const fullName = `${formData.firstName} ${formData.middleName} ${formData.familyName}`;
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('userType', formData.userType);  // Store user type

    // Redirect based on userType
    if (['Baby Class', 'PP1', 'PP2'].includes(formData.userType)) {
      navigate('/services'); // Redirect to services page for younger classes
    } else {
      navigate('/book-interview'); // Redirect to book interview for Grades 1-9
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Adams Registration Form</h2>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="middleName"
          placeholder="Middle Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="familyName"
          placeholder="Family Name"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <select name="userType" onChange={handleChange}>
          <option value="Baby Class">Baby Class</option>
          <option value="PP1">PP1</option>
          <option value="PP2">PP2</option>
          <option value="Grade1">Grade 1</option>
          <option value="Grade2">Grade 2</option>
          <option value="Grade3">Grade 3</option>
          <option value="Grade4">Grade 4</option>
          <option value="Grade5">Grade 5</option>
          <option value="Grade6">Grade 6</option>
          <option value="Grade7">Grade 7</option>
          <option value="Grade8">Grade 8</option>
          <option value="Grade9">Grade 9</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
