import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useUpdatePassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';
import './Login.css'
import UserMake from '../Hook/UserMake';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        uError,
      ] = useSignInWithEmailAndPassword(auth);
    const [updatePassword, updating, error] = useUpdatePassword(auth);
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)

    }
    const handlePassword = (e) => {
        setPassword(e.target.value)

    }
    let errorShow
    if (uError) {
        errorShow = uError.message
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
        setEmail('')
        setPassword('')    }
        const [users] = UserMake(user)
    const handleResetPassword = async() =>{
        await updatePassword(email);
          alert('Updated password');
    }

    return (
        <div className='register-head'>
            <div className='register-main d-flex justify-content-center'>
                <div className="register-body">
                    <h1 className='text-center text-primary mt-3 mb-4'>Please Login</h1>
                    <form onSubmit={handleSubmit}>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input onChange={handleEmail} type="email" class="form-control" required />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Password</label>
                            <input onChange={handlePassword} type="password" class="form-control" required />
                        </div>
                        <p className='text-danger'>{errorShow}</p>
                        <p>If you have not account <Link to="/register">Register </Link> </p>
                        <p>Forget password?  <button className='btn btn-outline-primary' onClick={handleResetPassword}> Reset Password</button></p>

                        <div class="mt-4 mb-3 text-center">
                            <input type="submit" class="form-control btn btn-primary w-50" value="Login" />
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;