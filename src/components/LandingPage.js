import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCheck,
  faPen,
  faCommentAlt,
  faCalendarAlt,
  faGlasses,
  faChartLine,
  faFeatherAlt,
} from '@fortawesome/free-solid-svg-icons';
import typingOnComputer from '../images/typingOnComputer.jpg';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="top">
        <h1>
          Small, Daily Steps to Better Writing
          <br />
          <span className="fa-icon">
            <FontAwesomeIcon icon={faFeatherAlt} />
          </span>
        </h1>
        <h2>
          Become a better writer by practicing a little writing and critiquing
          each day.
        </h2>

        <div className="instructions-section">
          <h3>How WriteBites Works</h3>

          <ul className="instructions">
            <li>
              <span className="fa-icon">
                <FontAwesomeIcon icon={faUserCheck} />
              </span>
              Create a free account.
            </li>
            <li>
              <span className="fa-icon">
                <FontAwesomeIcon icon={faPen} />
              </span>{' '}
              Each day, visit this app and respond to one writing prompt.
            </li>
            <li>
              <span className="fa-icon">
                <FontAwesomeIcon icon={faCommentAlt} />
              </span>
              Each day, read one person's writing and give quick feedback.
            </li>
            <li>
              <span className="fa-icon">
                <FontAwesomeIcon icon={faGlasses} />
              </span>
              Read and learn from the feedback you've received.
            </li>
            <li>
              <span className="fa-icon">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </span>
              Come back the next day, ready for more!
            </li>
            <li>
              <span className="fa-icon">
                <FontAwesomeIcon icon={faChartLine} />
              </span>
              See how your writing skills develop and expand.
            </li>
          </ul>
          <button>
            Sign Up
            <span className="fa-icon">
              <FontAwesomeIcon icon={faFeatherAlt} />
            </span>
          </button>
        </div>
      </div>

      <div className="bottom">
        <div className="writing-importance">
          <h2>Why are writing skills important?</h2>
          <h3>Writing...</h3>
          <ul>
            <li>
              ... is a primary basis upon which our work, learning, intellect,
              and personality is judged.
            </li>
            <li>... expresses who we are.</li>
            <li>
              ... helps us to develop our communication and thinking skills.
            </li>
            <li>... improves our ability to explain and explore ideas.</li>
            <li>
              ... creates a more permanent and visible record of who we are, our
              ideas, our memories, and our contributions.
            </li>
            <li>... helps us understand our lives better.</li>
          </ul>
        </div>

        <div className="image-container">
          <img src={typingOnComputer} alt="typing on computer" />
        </div>
      </div>

      <footer>©2020 WriteBites</footer>
    </div>
  );
}
