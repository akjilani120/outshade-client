import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link , useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import UserMake from '../Hook/UserMake';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        uError,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const navigate = useNavigate()   
    const [users] = UserMake(user)
 let errorShow 
  if(uError || error){
    errorShow = uError.message || error.message
  }
  
  if (updating || loading) {
      return <p>loading...</p>;
  }
 
    const handleName =(e) =>{
        setDisplayName(e.target.value) 
        
    }
    const handleImage =(e) =>{
       setPhotoURL(e.target.value) 
        
    }
    const handleEmail =(e) =>{
       setEmail(e.target.value) 
      
    }
    const handlePassword =(e) =>{  
            setPassword(e.target.value) 
  
    }
    const handleSubmit =async (event) =>{
        event.preventDefault()
        await createUserWithEmailAndPassword(email, password )        
        await updateProfile({ displayName, photoURL });        
        setDisplayName( )
        setEmail( )
        setPassword( )
        setPhotoURL( )
         navigate("/login")
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
                        <input onChange={handlePassword} min="7"  max="15" type="password" class="form-control"  required />
                    </div>
                    <p className='text-danger'>{errorShow}</p>
                    <p>if you have account <Link to="/login">Login </Link> </p>
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