import React, {useState} from 'react'

import { Link , useNavigate} from 'react-router-dom'


export default function SignInPage() {
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        const res = await fetch("http://localhost:8080/api/customer/add", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = res.json();
         if(res.status === 400 || !data)
         {
            window.alert("Invalid Credentials");
         }
         else
         {
            window.alert("Login Successfull");
            navigate('/');
         }
    };
    return (
        <div className="log_in">
            <form action="/" className='' method='POST'>

                <div className='row'>
                    <div className='col-sm-12 text-center mb-4'>
                        <h2>Sign in to us</h2>
                    </div>
                    <div className='col-sm-12'>
                        <label>Username or email address</label>
                        <input className='form-control' type="text" value={email} 
                        onChange={(e)=> setEmail(e.target.value)} name="first_name" required />
                    </div>
                    <div className='col-sm-12'>
                        <label>Password</label>
                        <input className='form-control' type="password" value={password} 
                        onChange={(e)=> setPassword(e.target.value)}
                        name="password" required />
                    </div>
                    <div className='col-sm-auto d-inline-flex align-items-center mb-3'>
                    <p className='font-12 pt-1'>New? <Link to="#">Create an account</Link>.</p>
                    </div>
                    <div className='col-sm mb-3 text-end'>
                        <Link to="#" className='font-12 text-end mr-3'>Forget password?</Link>
                    <Link to="#" className='font-12'>Back to Homepage</Link>.
                    </div>
                    <div className='col-sm-12'>
                        <button id="sub_btn" type="submit" onClick={handleSubmit}>Login</button>
                    </div>
                </div>
            </form>
            <footer>
                <p></p>
            </footer>
        </div>
    )
}