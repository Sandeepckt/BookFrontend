import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState} from 'react'


export default function SignUpPage() {
    const [customer, setCustomer] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCustomer((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        
        
        const demo = JSON.stringify(customer);

        fetch("http://localhost:8080/api/customer/add", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Parsed JSON data:", data); // Log the response data
            
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle the error, show a message to the user, etc.
        });
        navigate('/login');
        event.preventDefault();
    };
    return (
        <div className="sign_in">
            <form action="/home" onSubmit={handleSubmit}>
                
                <div className='row'>
                    <div className='col-sm-12 text-center mb-4'>
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
                        </div>
                    <div className='col-sm-6'>
                    <label>Username</label>
                    <input className='form-control' type="text" name="customerName" onChange={handleChange} required />
                    </div>
                    <div className='col-sm-6'>
                    <label>Email address</label>
                    <input className='form-control' type="email" name="customerEmail" onChange={handleChange} required />
                    </div>
                    <div className='col-sm-6'>
                    <label>Password</label>
                    <input className='form-control' type="password" name="password"  onChange={handleChange} required />
                    </div>
                    <div className='col-sm-6'>
                    <label>Contact</label>
                    <input className='form-control' type="number" name="customerContactNo" onChange={handleChange} required />
                    </div>
                    <div className='col-sm-auto d-inline-flex align-items-center mb-3'>
                    
                    <input type="checkbox" name="checkbox" id="checkbox" required className='d-inline-block' /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                    </div>
                    <div className='col-sm mb-3 text-end'>
                    <Link to="/" className='font-12'>Back to Homepage</Link>.
                    </div>
                    <div className='col-sm-12'>
                    <button id="sub_btn" type="submit">Register</button>
                    </div>
                </div>
                 </form>
        </div>
    )

}