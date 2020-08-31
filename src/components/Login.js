import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faFont } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import typistWithPlant from '../images/typistWithPlant.jpg';

export default function Login(props) {
  const [newUser, setNewUser] = useState({
    username: '',
    password1: '',
  });

  const [email] = localStorage.getItem('email') || '';

  const [showPassword1, setShowPassword1] = useState(false);
  const showPassword1Ref = useRef();
  showPassword1Ref.current = showPassword1;

  const [isUpperCase, setIsUpperCase] = useState(false);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:9000/api/auth/login', {
        username: newUser.username,
        password: newUser.password1,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', newUser.username);
        localStorage.setItem('submissions', JSON.stringify([]));

        // To get the information from the token payload:
        const base64 = response.data.token.split('.')[1];
        const decoded = window.atob(base64);
        const tokenInfo = JSON.parse(decoded);
        //const issueDate = new Date(tokenInfo.iat);
        ///const expirationDate = new Date(tokenInfo.exp);

        localStorage.setItem('id', tokenInfo.id);
        if (email) {
          props.history.push('/profile');
        } else {
          props.history.push('/aboutme');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const togglePasswordDisplay = () => {
    setShowPassword1(!showPassword1);
  };

  const toggleCase = () => {
    setIsUpperCase(!isUpperCase);
    console.log('toggle case');
    if (!isUpperCase) {
      const capitalizedUsername = newUser.username
        .trim()
        .toLowerCase()
        .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
      setNewUser({ ...newUser, username: capitalizedUsername });
    } else {
      setNewUser({ ...newUser, username: newUser.username.toLowerCase() });
    }
  };

  return (
    <div className="register-page">
      <div className="left-side">
        <div className="image-container">
          <img src={typistWithPlant} alt="typist with plant" />
        </div>
      </div>
      <div className="right-side">
        <h1>Sign In</h1>
        <h3>Let's get started writing today!</h3>
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
              placeholder="username"
            />
            <span className="fa-icon">
              <FontAwesomeIcon icon={faFont} onClick={toggleCase} />
            </span>
          </div>

          <div className="input-group">
            <label htmlFor="password1">Password:</label>
            <input
              type={showPassword1Ref.current ? 'text' : 'password'}
              name="password1"
              id="password1"
              value={newUser.password1}
              onChange={handleChange}
              required
              placeholder="password"
            />
            {showPassword1 ? (
              <span className="fa-icon">
                <FontAwesomeIcon
                  icon={faEye}
                  onClick={() => togglePasswordDisplay()}
                />
              </span>
            ) : (
              <span className="fa-icon">
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  onClick={() => togglePasswordDisplay()}
                />
              </span>
            )}
          </div>

          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? Make one <Link to="/register">here</Link>.
        </p>
      </div>
    </div>
  );
}
