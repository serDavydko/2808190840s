import React from "react";

import Comment from "./Comment";

const CommentsBlock = ({ comments, likesCount, commentsCount }) => {
  return (
    <>
      <header className="CommentsBlock">
        <div className="CommentsBlock__headers">
          <span>Последние отзывы</span>
          <a href="#">
            <span>Все отзывы</span>
          </a>
        </div>
        <div>
          <span className="like-count">{likesCount}</span>
          <span className="comment-count">{commentsCount}</span>
        </div>
      </header>
      {comments.map(comment => (
        <Comment comment={comment} />
      ))}
    </>
  );
};

export default CommentsBlock;
