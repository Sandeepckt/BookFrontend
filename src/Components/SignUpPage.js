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
    const navigate = useNavigate;

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
            alert('Please agree to the terms of service.');
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
        <div className="sign_in">
            <form action="/home" onSubmit={handleSubmit}>
                
                <div className='row'>
                    <div className='col-sm-12 text-center mb-4'>
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
                        </div>
                    <div className='col-sm-6'>
                    <label>Username</label>
                    <input className='form-control' type="text" name="customerName" required />
                    </div>
                    <div className='col-sm-6'>
                    <label>Email address</label>
                    <input className='form-control' type="email" name="customerEmail" required />
                    </div>
                    <div className='col-sm-6'>
                    <label>Password</label>
                    <input className='form-control' type="password" name="password" required />
                    </div>
                    <div className='col-sm-6'>
                    <label>Contact</label>
                    <input className='form-control' type="number" name="customerContactNo" required />
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