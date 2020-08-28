import React from 'react';
import typingOnComputer from '../images/typingOnComputer.jpg';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="image-container">
        <img src={typingOnComputer} alt="typing on computer" />
      </div>
    </div>
  );
}
