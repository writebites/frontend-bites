import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserEdit,
  faEnvelopeOpenText,
  faThumbtack,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import writingOutside from '../images/writingOutside.jpg';

export default function Profile() {
  const [writer] = useState({
    username: localStorage.getItem('username') || '',
    blurb: localStorage.getItem('blurb') || '',
    location: localStorage.getItem('location') || '',
    email: localStorage.getItem('email') || '',
    favorites: localStorage.getItem('favorites') || '',
  });

  return (
    <div className="profile-page">
      <div className="left-side">
        <h1>{writer.username ? writer.username : 'Profile'}</h1>

        {writer.email && (
          <div className="profile-item">
            <span className="fa-icon">
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
            </span>
            <p>{writer.email}</p>
          </div>
        )}

        {writer.blurb && (
          <div className="profile-item">
            <span className="fa-icon">
              <FontAwesomeIcon icon={faUserEdit} />
            </span>
            <p>{writer.blurb}</p>
          </div>
        )}

        {writer.location && (
          <div className="profile-item">
            <span className="fa-icon">
              <FontAwesomeIcon icon={faThumbtack} />
            </span>
            <p>{writer.location}</p>
          </div>
        )}

        {writer.favorites && (
          <div className="profile-item">
            <span className="fa-icon">
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <p>Favorites: {writer.favorites}</p>
          </div>
        )}
      </div>
      <div className="right-side">
        <div className="image-container">
          <img src={writingOutside} alt="writing outside" />
        </div>
      </div>
    </div>
  );
}
