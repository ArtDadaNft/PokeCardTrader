import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({ email: '', phone: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/auth/register', formData);
        // Gestisci la risposta
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" onChange={handleChange} placeholder="Email" />
            <input type="text" name="phone" onChange={handleChange} placeholder="Phone" />
            <input type="password" name="password" onChange={handleChange} placeholder="Password" />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
