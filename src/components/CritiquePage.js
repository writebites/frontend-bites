import React, { useState, useEffect } from 'react';
import sampleResponses from '../data/sampleResponses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRandom,
  faPaperPlane,
  faEraser,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import Rating from 'react-rating';
import laptopTyping from '../images/laptopTyping.png';

export default function CritiquePage(props) {
  const [responseToCritique, setResponseToCritique] = useState({
    prompt: '',
    body: '',
    promptId: 0,
    title: '',
    responseId: 0,
    post_id: 0,
    user_id: 0, // Note: This user_id refers to the author of the writing response, NOT the author of the critique
  });

  const [critique, setCritique] = useState({
    star_rating: 0,
    body: '',
  });

  useEffect(() => {
    const responseIndex = Math.floor(Math.random() * sampleResponses.length);
    setResponseToCritique((oldResponse) => {
      return {
        ...oldResponse,
        responseId: responseIndex,
        prompt: sampleResponses[responseIndex].prompt,
        promptId: sampleResponses[responseIndex].promptId,
        title: sampleResponses[responseIndex].title,
        body: sampleResponses[responseIndex].body,
        post_id: sampleResponses[responseIndex].id,
        user_id: sampleResponses[responseIndex].user_id,
      };
    });
  }, []);

  const changeResponse = () => {
    const responseIndex = Math.floor(Math.random() * sampleResponses.length);
    setResponseToCritique((oldResponse) => {
      return {
        ...oldResponse,
        responseId: responseIndex,
        prompt: sampleResponses[responseIndex].prompt,
        promptId: sampleResponses[responseIndex].promptId,
        title: sampleResponses[responseIndex].title,
        body: sampleResponses[responseIndex].body,
        post_id: sampleResponses[responseIndex].id,
        user_id: sampleResponses[responseIndex].user_id,
      };
    });
    setCritique({ ...critique, body: '', star_rating: 0 });
  };

  const handleChange = (e) => {
    setCritique({ ...critique, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submissionBody = {
      star_rating: critique.star_rating,
      body: critique.body,
      user_id: localStorage.getItem('id'),
      post_id: responseToCritique.post_id,
    };

    let critiques = localStorage.getItem('critiques');
    critiques = JSON.parse(critiques);
    critiques = [...critiques, submissionBody];
    localStorage.setItem('critiques', JSON.stringify(critiques));
    props.history.push('/collection');
  };

  const handleClear = (e) => {
    setCritique({ ...critique, body: '', star_rating: 0 });
  };

  const handleRatingClick = (value) => {
    setCritique({ ...critique, star_rating: value });
  };

  return (
    <div className="critique-page">
      <h1>Give Quick Feedback</h1>
      <main>
        <div className="left-side">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="star_rating">Your Rating:</label>
              <Rating
                initialRating={critique.star_rating}
                onClick={handleRatingClick}
                fractions="2"
                emptySymbol={<FontAwesomeIcon icon={farStar} />}
                fullSymbol={<FontAwesomeIcon icon={faStar} />}
                className="star-rating"
              />
              <input
                name="star_rating"
                id="star_rating"
                value={critique.star_rating}
                onChange={handleChange}
                required
                type="number"
                step="0.5"
                max="5"
                min="0"
              />
            </div>
            <div className="input-group">
              <label htmlFor="body">Your Feedback:</label>
              <textarea
                name="body"
                id="body"
                value={critique.body}
                onChange={handleChange}
                required
                placeholder="write your feedback here"
                rows="10"
              />
            </div>
            <div className="button-group">
              <button type="submit">
                <FontAwesomeIcon icon={faPaperPlane} className="fa-icon" />{' '}
                Submit
              </button>

              <button type="clear" onClick={handleClear}>
                {' '}
                <FontAwesomeIcon icon={faEraser} className="fa-icon" /> Clear
              </button>

              <button type="button" onClick={changeResponse}>
                <FontAwesomeIcon icon={faRandom} className="fa-icon" />
                New
              </button>
            </div>
          </form>
        </div>

        <div className="right-side">
          <h2>{responseToCritique.title}</h2>
          <h3>Prompt: {responseToCritique.prompt}</h3>
          <p>{responseToCritique.body}</p>
          <div className="image-container">
            <img src={laptopTyping} alt="typing on laptop" />
          </div>
        </div>
      </main>
    </div>
  );
}
