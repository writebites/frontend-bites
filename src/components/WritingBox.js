import React from 'react';

export default function WritingBox(props) {
  return (
    <div className="writing-box">
      <h2>{props.submission.title}</h2>
      <h3>Prompt: {props.submission.prompt}</h3>
      <p>{props.submission.body}</p>
    </div>
  );
}
