import React, { useState } from 'react';
import axios from 'axios';
import '../designs/Login.css'; // assuming you put the CSS in a file named Login.css
import { Link } from 'react-router-dom';
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', formData);
            alert('Login successful');
            console.log(response.data); // Store token or other user info if needed
        } catch (error) {
            console.error('There was an error!', error);
            alert('Login failed');
        }
    };

    return (
        <div className="wrapper">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="input-box">
                    <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="input-box button">
                    <input type="submit" value="Login" />
                </div>
                <div className="text">
                    <h3>Don't have an account?  <Link to="/Register">Register now</Link></h3>
                </div>
            </form>
        </div>
    );
};

export default Login;