import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenFancy,
  faFont,
  faEraser,
  faPaperPlane,
  faRandom,
} from '@fortawesome/free-solid-svg-icons';
import prompts from '../data/prompts';
import blankPage from '../images/blankPageCropped.jpg';

export default function WritingPromptPage(props) {
  //const [prompt, setPrompt] = useState('What did you eat for breakfast?');
  const [submission, setSubmission] = useState({
    prompt: '',
    writingResponse: '',
    promptId: 0,
    title: '',
  });
  const [displayCursive, setDisplayCursive] = useState(false);

  useEffect(() => {
    const promptIndex = Math.floor(Math.random() * prompts.length);
    //setPrompt(prompts[promptIndex]);
    setSubmission((oldSubmission) => {
      return {
        ...oldSubmission,
        promptId: promptIndex,
        prompt: prompts[promptIndex],
      };
    });
  }, []);

  function changePrompt() {
    const promptIndex = Math.floor(Math.random() * prompts.length);
    setSubmission({
      ...submission,
      promptId: promptIndex,
      prompt: prompts[promptIndex],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let submissions = localStorage.getItem('submissions');
    submissions = JSON.parse(submissions);
    submissions = [...submissions, submission];
    localStorage.setItem('submissions', JSON.stringify(submissions));
    props.history.push('/collection');
  }
  const handleChange = (e) => {
    setSubmission({ ...submission, [e.target.name]: e.target.value });
  };

  function toggleDisplay() {
    setDisplayCursive(!displayCursive);
  }

  function handleClear() {
    setSubmission({ ...submission, writingResponse: '', title: '' });
  }

  return (
    <div className="writing-prompt-page">
      <h1>Writing Prompt of the Day</h1>
      <h2>{submission.prompt}</h2>
      <button onClick={changePrompt}>
        <FontAwesomeIcon icon={faRandom} className="fa-icon" />
        Get New Prompt
      </button>
      <div className="writing-area">
        <div className="left-side">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="title">Your Title:</label>
              <input
                name="title"
                id="title"
                value={submission.title}
                onChange={handleChange}
                required
                placeholder="title"
              />
            </div>
            <div className="input-group">
              <label htmlFor="writingResponse">Your Response:</label>
              <textarea
                name="writingResponse"
                id="writingResponse"
                value={submission.writingResponse}
                onChange={handleChange}
                required
                placeholder="write your response here"
                rows="10"
              />
            </div>

            <div>
              <button onClick={toggleDisplay}>
                {displayCursive ? (
                  <>
                    <FontAwesomeIcon icon={faFont} className="fa-icon" />
                    Display
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPenFancy} className="fa-icon" />
                    Display
                  </>
                )}
              </button>
              <button type="submit">
                <FontAwesomeIcon icon={faPaperPlane} className="fa-icon" />
                Submit
              </button>
              <button onClick={handleClear}>
                {' '}
                <FontAwesomeIcon icon={faEraser} className="fa-icon" /> Clear
              </button>
            </div>
          </form>
        </div>
        <div className="right-side">
          <h3 className={displayCursive ? 'handwriting' : 'typing'}>
            {submission.title}
          </h3>
          <p className={displayCursive ? 'handwriting' : 'typing'}>
            {submission.writingResponse}
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={blankPage} alt="blank page with pens and plants" />
      </div>
    </div>
  );
}

// style={{ whiteSpace: 'pre-wrap' }}
