import React, { useState } from 'react';
import WritingBox from './WritingBox';

export default function WritingCollection(props) {
  const [submissions] = useState(
    JSON.parse(localStorage.getItem('submissions'))
  );

  return (
    <div className="writing-collection">
      {submissions.map((submission, index) => (
        <WritingBox
          submission={submission}
          key={`${submission.title}${index}`}
        />
      ))}
    </div>
  );
}
