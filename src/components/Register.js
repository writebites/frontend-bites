import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faFont } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import typewriter from '../images/typewriter.jpg';

export default function Register(props) {
  const [newUser, setNewUser] = useState({
    username: '',
    password1: '',
    password2: '',
  });
  const [message, setMessage] = useState(null);

  const [showPassword1, setShowPassword1] = useState(false);
  const showPassword1Ref = useRef();
  showPassword1Ref.current = showPassword1;

  const [showPassword2, setShowPassword2] = useState(false);
  const showPassword2Ref = useRef();
  showPassword2Ref.current = showPassword2;

  const [isUpperCase, setIsUpperCase] = useState(false);

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

          // To get the information from the token payload:
          //const base64 = response.data.token.split('.')[1];
          //const decoded = window.atob(base64);
          //const tokenInfo = JSON.parse(decoded);

          // const issueDate = new Date(tokenInfo.iat);
          // const expirationDate = new Date(tokenInfo.exp);

          props.history.push('/login');
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setMessage("Passwords don't match; try again.");
    }
  };

  const togglePasswordDisplay = (number) => {
    if (number === 1) {
      setShowPassword1(!showPassword1);
    } else {
      setShowPassword2(!showPassword2);
    }
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
                  onClick={() => togglePasswordDisplay(1)}
                />
              </span>
            ) : (
              <span className="fa-icon">
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  onClick={() => togglePasswordDisplay(1)}
                />
              </span>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="password2">Confirm Password:</label>
            <input
              type={showPassword2Ref.current ? 'text' : 'password'}
              name="password2"
              id="password2"
              value={newUser.password2}
              onChange={handleChange}
              required
              placeholder="confirm password"
            />
            {showPassword2Ref.current ? (
              <span className="fa-icon">
                <FontAwesomeIcon
                  icon={faEye}
                  onClick={() => togglePasswordDisplay(2)}
                />
              </span>
            ) : (
              <span className="fa-icon">
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  onClick={() => togglePasswordDisplay(2)}
                />
              </span>
            )}
          </div>
          {message && <p>{message}</p>}

          <button type="submit">Submit</button>
        </form>
        <p>
          Already have an account? Sign in <Link to="/login">here</Link>.
        </p>
      </div>
    </div>
  );
}
