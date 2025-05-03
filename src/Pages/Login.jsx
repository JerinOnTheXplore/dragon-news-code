import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const [error,setError]=useState("");
  const {signIn} = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate(); 
  // console.log(location);
  const handleLogin = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({email,password});

    signIn(email,password).then(result=>{
      const user = result.user;
      // console.log(user);
      navigate(`${location.state ? location.state : "/"}`);
    })
    .catch(error=>{
      const errorMessage=error.message;
      console.log(errorMessage);
      // alert(errorMessage);
      setError(errorMessage);
    })
    

  }
    return (
        <div className=''>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body py-10">
      <h1 className="text-2xl font-bold">Login your account</h1>
        <form onSubmit={handleLogin} className="form">
          <label className="label">Email address</label>
          <input type="email" name='email' className="input" placeholder="Enter your email address" required />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Enter your password" required />
          <div><a className="link link-hover">Forgot password?</a></div>

          {error && <p className='text-red-600 text-xs'>{error}</p>}

          <button type='submit' className="btn btn-neutral mt-4 w-full">Login</button>
        </form>
        <p className='font-semibold text-center pt-5'>Don't have an account ? <Link className='text-secondary' to="/auth/register">Register</Link></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;