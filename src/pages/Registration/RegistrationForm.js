// RegistrationForm.js
import React, { useState } from 'react';
import './styles.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        userType: 'student'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        if (data.status === "success") {
            alert("Registration successful");
        } else {
            alert("Registration failed: " + data.message);
        }
    };

    return (
        <div className="form-container"> {/* Centering wrapper */}
            <form onSubmit={handleSubmit}>
                <h2>Adams Registration form </h2>
                <input type="text" name="First Name" placeholder="First Name" onChange={handleChange} />
                <input type="text" name="Middle Name" placeholder="Middle Name" onChange={handleChange} />
                <input type="text" name="Family Name" placeholder="Family Name" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
                <select name="userType" onChange={handleChange}>
                    <option value="student">Student</option>
                    <option value="parent">Parent</option>
                    <option value="director">Director</option>
                    <option value="accountant">Accountant</option>
                    <option value="secretary">Secretary</option>
                    <option value="manager">Manager</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
