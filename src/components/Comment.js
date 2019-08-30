import React from 'react';

import parseDate from '../functions/parseDate';

const Comment = ({ comment }) => {
  const parsedDate = parseDate(comment.date);

  return (
    <>
      <div className="Comment">
        <div>
          <span className="Comment__author">
            {comment.author}
          </span>
          <span className="Comment__date">{parsedDate}</span>
        </div>

        <div className="Comment__content">{comment.content}</div>
      </div>
    </>
  );
};

export default Comment;
