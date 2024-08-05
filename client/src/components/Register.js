import React, { useState } from 'react';
import axios from 'axios';
import '../designs/Register.css'; // assuming you put the CSS in a file named Register.css
import { Link } from 'react-router-dom';
const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false
    });

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', formData);
            alert('Registration successful');
        } catch (error) {
            console.error('There was an error!', error);
            alert('Registration failed');
        }
    };

    return (
        <div className="wrapper">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="input-box">
                    <input type="text" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="input-box">
                    <input type="password" name="password" placeholder="Create password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="input-box">
                    <input type="password" name="confirmPassword" placeholder="Confirm password" value={formData.confirmPassword} onChange={handleChange} required />
                </div>
                <div className="policy">
                    <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
                    <h3>I accept all terms & condition</h3>
                </div>
                <div className="input-box button">
                    <input type="submit" value="Register Now" />
                </div>
                <div className="text">
                    <h3>Already have an account?   <Link to="/login">Login now</Link></h3>
                </div>
            </form>
        </div>
    );
};

export default Register;