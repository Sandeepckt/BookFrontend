import React from 'react'
import { Link } from 'react-router-dom'


export default function SignInPage() {
    return (
        <div className="log_in">
            <form action="/" className=''>

                <div className='row'>
                    <div className='col-sm-12 text-center mb-4'>
                        <h2>Sign in to us</h2>
                    </div>
                    <div className='col-sm-12'>
                        <label>Username or email address</label>
                        <input className='form-control' type="text" name="first_name" required />
                    </div>
                    <div className='col-sm-12'>
                        <label>Password</label>
                        <input className='form-control' type="password" name="password" required />
                    </div>
                    <div className='col-sm-auto d-inline-flex align-items-center mb-3'>
                    <p className='font-12 pt-1'>New? <Link to="#">Create an account</Link>.</p>
                    </div>
                    <div className='col-sm mb-3 text-end'>
                        <Link to="#" className='font-12 text-end mr-3'>Forget password?</Link>
                    <Link to="#" className='font-12'>Back to Homepage</Link>.
                    </div>
                    <div className='col-sm-12'>
                        <button id="sub_btn" type="submit">Login</button>
                    </div>
                </div>
            </form>
            <footer>
                <p></p>
            </footer>
        </div>
    )
}