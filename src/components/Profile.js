import React from 'react';
import typingOnComputer from '../images/typingOnComputer.jpg';

export default function Profile() {
  return (
    <div className="landing-page">
      <h1>Profile</h1>
      <div className="image-container">
        <img src={typingOnComputer} alt="typing on computer" />
      </div>
    </div>
  );
}
