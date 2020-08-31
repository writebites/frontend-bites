import React, { useState, useEffect } from 'react';
import prompts from '../data/prompts';

export default function WritingPromptPage(props) {
  //const [prompt, setPrompt] = useState('What did you eat for breakfast?');
  const [submission, setSubmission] = useState({
    prompt: '',
    writingResponse: '',
    promptId: 0,
  });

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
  }
  const handleChange = (e) => {
    setSubmission({ ...submission, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Writing Prompt of the Day</h1>
      <h2>{submission.prompt}</h2>
      <button onClick={changePrompt}>New Prompt</button>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
