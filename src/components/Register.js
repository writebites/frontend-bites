import React, { useState } from 'react';
import axios from 'axios';
import typewriter from '../images/typewriter.jpg';

export default function Register(props) {
  const [newUser, setNewUser] = useState({
    username: '',
    password1: '',
    password2: '',
  });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser.password1 === newUser.password2) {
      setMessage(null);
      axios
        .post('http://localhost:9000/api/auth/register', {
          username: newUser.username,
          password: newUser.password1,
        })
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('username', newUser.username);
          props.history.push('/aboutme');
          /*
          // To get the information from the token payload:
          const base64 = response.data.token.split('.')[1];
          const decoded = window.atob(base64);
          const tokenInfo = JSON.parse(decoded);
          const issueDate = new Date(tokenInfo.iat);
          const expirationDate = new Date(tokenInfo.exp);
          */
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setMessage("Passwords don't match; try again.");
    }
  };

  return (
    <div className="register-page">
      <div className="left-side">
        <div className="image-container">
          <img src={typewriter} alt="typewriter" />
        </div>
      </div>
      <div className="right-side">
        <h1>Register</h1>
        <h3>Sign up for a free account today.</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={newUser.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password1">Password:</label>
            <input
              type="password"
              name="password1"
              id="password1"
              value={newUser.password1}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password2">Confirm Password:</label>
            <input
              type="password"
              name="password2"
              id="password2"
              value={newUser.password2}
              onChange={handleChange}
              required
            />
          </div>
          {message && <p>{message}</p>}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
