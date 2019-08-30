import React from 'react';
import Comment from './Comment';

const CommentsBlock = ({ comments, likesCount, commentsCount }) => (
  <>
    <header className="CommentsBlock">
      <div className="CommentsBlock__headers">
        <span>Последние отзывы</span>
        <a href="#">
          <span>Все отзывы</span>
        </a>
      </div>
      <div className="CommentsBlock__counters">
        <span className="like-count">{likesCount}</span>
        <span className="comment-count">{commentsCount}</span>
      </div>
    </header>
    {comments.map((comment, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Comment comment={comment} key={i} />
    ))}
  </>
);

export default CommentsBlock;
