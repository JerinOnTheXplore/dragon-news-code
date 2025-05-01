import React from 'react';
import { NavLink } from 'react-router';
import user from "../assets/user.png"
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-5">
    <NavLink className="text-accent" to="/">Home</NavLink>
        <NavLink className="text-accent" to="/about">About</NavLink>
        <NavLink className="text-accent" to="/career">Career</NavLink>
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    <img src={user} alt="" />
    <a className="btn btn-primary px-10">Login</a>
  </div>
</div>
    );
};

export default Navbar;