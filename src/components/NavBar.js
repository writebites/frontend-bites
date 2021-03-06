import React from 'react';
import { Link } from 'react-router-dom';
import BookWithFeather from '../images/bookWithFeather3.png';

export default function NavBar() {
  return (
    <header>
      <Link to="/">
        <img src={BookWithFeather} alt="book with feather pen" />
      </Link>
      <h1>WriteBites</h1>
      <nav>
        <Link to="/prompt">Write</Link>
        <Link to="/critique">Critique</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/aboutme">Update</Link>
        <Link to="/login">Login</Link>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}
