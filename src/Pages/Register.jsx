import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const [nameError,setNameError]=useState("");
  const {createUser,setUser,updateUser}=use(AuthContext);

  const navigate = useNavigate();

  const handleRegister =(e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if(name.length < 5){
      setNameError("Name should be more than 5 characters")
      return;
    }
    else{
      setNameError("");
    }
    const photo = form.photo.value;
    const email=form.email.value;
    const password = form.password.value;
    // console.log(name,photo,email,password);
    createUser(email,password).then(result=>{
      const user = result.user;
      updateUser({displayName:name,photoURL:photo}).then(()=>{
        setUser({...user,displayName:name,photoURL:photo});
        navigate("/");
      })
      .catch((error)=>{
        // console.log(error);
        const errorMessage=error.message;
        setUser(user);
        alert(errorMessage);
      })
      
      // console.log(user);
    }).catch(error=>{
      const errorMessage = error.message;
      console.log(errorMessage)
    })
  }
    return (
        <div className=''>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body py-10">
      <h1 className="text-2xl font-bold">Register your account</h1>
        <form onSubmit={handleRegister} className="form">
        <label className="label">Name</label>
        <input name='name' type="text" className="input" placeholder="Your Name" required />
        {nameError && <p className='text-red-700 text-xs'>{nameError}</p>}
        <label className="label">Photo URL </label>
          <input name='photo' type="text" className="input" placeholder="Photo URL" required />
          <label className="label">Email address</label>
          <input name='email' type="email" className="input" placeholder="Enter your email address" required />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Enter your password" required />
          <button type='submit' className="btn btn-neutral mt-4 w-full">Register</button>
        </form>
        <p className='font-semibold text-center pt-5'>Already have an account ? <Link className='text-secondary' to="/auth/login">Login</Link></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;