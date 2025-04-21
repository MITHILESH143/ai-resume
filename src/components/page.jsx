import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 p-4 text-white flex justify-between">
    <h1 className="font-bold">AI Resume</h1>
    <div className="space-x-4">
      <Link to="/">Dashboard</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/interview">Interview</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  </nav>
);

export default Navbar;