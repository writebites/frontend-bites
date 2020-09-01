import React, { useState, useEffect } from 'react';
import sampleResponses from '../data/sampleResponses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom } from '@fortawesome/free-solid-svg-icons';

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
    // Note: For submitting critique, grab user_id from localStorage to get the critique's author, and post_id from the responseToCritique object.
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
  };

  const handleChange = (e) => {
    setCritique({ ...critique, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(critique);
  };

  return (
    <div className="critique-page">
      <h1>Give Quick Feedback</h1>

      <div className="right-side">
        <button onClick={changeResponse}>
          <FontAwesomeIcon icon={faRandom} className="fa-icon" />
          Get New Prompt
        </button>
        <h2>{responseToCritique.title}</h2>
        <h3>Prompt: {responseToCritique.prompt}</h3>
        <p>{responseToCritique.body}</p>
      </div>

      <div className="left-side">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="star_rating">Your Rating:</label>
            <input
              name="star_rating"
              id="star_rating"
              value={critique.star_rating}
              onChange={handleChange}
              required
              type="number"
              placeholder="star rating"
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
        </form>
      </div>
    </div>
  );
}
