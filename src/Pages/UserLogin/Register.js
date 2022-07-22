import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
    const [name , setName] = useState('')
    const [image , setImage] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const handleName =(e) =>{
        setName(e.target.value) 
        
    }
    const handleImage =(e) =>{
       setImage(e.target.value) 
        
    }
    const handleEmail =(e) =>{
       setEmail(e.target.value) 
       
    }
    const handlePassword =(e) =>{
        setPassword(e.target.value) 
        
    }
    const handleSubmit =(event) =>{
        event.preventDefault()
        createUserWithEmailAndPassword(email, password )
        setEmail(" ")
        setName(" ")
       
    }
    return (
        <div className='register-head'>
            <div className='register-main d-flex justify-content-center'>
                <div className="register-body">
                     <h1 className='text-center text-primary mt-3 mb-4'>Please Register</h1>
                   <form  onSubmit={handleSubmit  }>
                   <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                        <input  onChange={handleName}  type="text" class="form-control"  required />
                    </div>
                    
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Profile Image Link</label>
                        <input onChange={handleImage}  type="text" class="form-control"  required  />
                    </div>
                    
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input  onChange={handleEmail} type="email" class="form-control" required />
                    </div>
                    
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                        <input onChange={handlePassword}  type="password" class="form-control"  required />
                    </div>
                    
                    <div class="mt-4 mb-3 text-center">
                        
                        <input  type="submit" class="form-control btn btn-primary w-50" value="Sign In"  />
                    </div>
                    
                   </form>
                </div>
            </div>

        </div>
    );
};

export default Register;