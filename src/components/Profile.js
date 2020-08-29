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
  const [writer, setWriter] = useState({
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

        <div className="profile-item">
          <span className="fa-icon">
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
          </span>
          {writer.email && <p>{writer.email}</p>}
        </div>

        <div className="profile-item">
          <span className="fa-icon">
            <FontAwesomeIcon icon={faUserEdit} />
          </span>
          {writer.blurb && <p>{writer.blurb}</p>}
        </div>

        <div className="profile-item">
          <span className="fa-icon">
            <FontAwesomeIcon icon={faThumbtack} />
          </span>
          {writer.location && <p>{writer.location}</p>}
        </div>

        <div className="profile-item">
          <span className="fa-icon">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          {writer.favorites && <p>Favorites: {writer.favorites}</p>}
        </div>
      </div>

      <div className="right-side"></div>
      <div className="image-container">
        <img src={writingOutside} alt="writing outside" />
      </div>
    </div>
  );
}
