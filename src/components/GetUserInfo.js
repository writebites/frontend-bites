import React, { useState } from 'react';
// import axios from 'axios';
import writeWithoutFear from '../images/writeWithoutFear.jpg';

export default function GetUserInfo(props) {
  const [newUser, setNewUser] = useState({
    blurb: localStorage.getItem('blurb') || '',
    location: localStorage.getItem('location') || '',
    email: localStorage.getItem('email') || '',
    favorites: localStorage.getItem('favorites') || '',
  });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    // TODO: update axios call here once BE has endpoint
    axios
      .post('http://localhost:9000/api/auth/aboutme', newUser)
      .then((response) => {
        localStorage.setItem('blurb', newUser.blurb);
        localStorage.setItem('location', newUser.location);
        localStorage.setItem('email', newUser.email);
        localStorage.setItem('favorites', newUser.favorites);
        // TODO: update location to push user to writing prompt page
        props.history.push('/profile');
      })
      .catch((err) => {
        console.log(err);
      });
      */
    localStorage.setItem('blurb', newUser.blurb);
    localStorage.setItem('location', newUser.location);
    localStorage.setItem('email', newUser.email);
    localStorage.setItem('favorites', newUser.favorites);
    props.history.push('/prompt');
  };

  return (
    <div className="register-page">
      <div className="left-side">
        <div className="image-container">
          <img src={writeWithoutFear} alt="'write without fear' sign" />
        </div>
      </div>
      <div className="right-side">
        <h1>A little more about you...</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="blurb">Short Bio:</label>
            <textarea
              type="text"
              name="blurb"
              id="blurb"
              value={newUser.blurb}
              onChange={handleChange}
              placeholder="short bio"
              rows="5"
            />
          </div>

          <div className="input-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              name="location"
              id="location"
              value={newUser.location}
              onChange={handleChange}
              placeholder="location"
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={newUser.email}
              onChange={handleChange}
              placeholder="email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="favorites">Favorites (books, authors, etc.):</label>
            <textarea
              type="text"
              name="favorites"
              id="favorites"
              value={newUser.favorites}
              onChange={handleChange}
              placeholder="favorite books, authors, etc."
              rows="5"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
