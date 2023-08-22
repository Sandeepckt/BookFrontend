import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState} from 'react'


export default function SignUpPage() {
    const [customer, setCustomer] = useState({
        customerName: '',
        customerEmail: '',
        password: '',
        customerContactNo: '',
        checkbox: false,
    });
    const navigate = useNavigate(); // Call useNavigate as a function

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setCustomer((prevCustomer) => ({
            ...prevCustomer,
            [name]: newValue,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!customer.checkbox) {
            // alert('Please agree to the terms of service.');
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/api/customer/add", {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(customer),
            });

            if (response.ok) {
                // Registration successful, navigate to appropriate page
                navigate('/');
            } else {
                // Handle error response
                const errorData = await response.json();
                console.error('Registration failed:', errorData);
                // You might want to display an error message to the user
            }
        } catch (error) {
            console.error('An error occurred:', error);
            // Handle network errors
        }
    };
    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home" onSubmit={handleSubmit}>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="customerName" onChange={handleChange} required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="customerEmail" onChange={handleChange} required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" onChange={handleChange} required />
                </p>
                <p>
                    <label>Contact</label><br/>
                    <input type="number" name="customerContactNo" onChange={handleChange} required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox"  /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}