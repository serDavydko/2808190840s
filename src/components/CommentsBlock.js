import React from 'react';
import CreateComment from './CreateComment';
import Comment from './Comment';

import { messageData } from '../API/sources';

class CommentsBlock extends React.Component {
  state = {
    comments: [],
    likesCount: 0,
    commentsCount: 0,
  };

  componentDidMount() {
    this.setState({
      comments: messageData.messages,
      likesCount: messageData.likesCount,
      commentsCount: messageData.commentsCount,
    });
  }

  handleFormSubmit = (event, value) => {
    const currentDate = new Date();

    event.preventDefault();
    this.setState(prevState => ({
      comments: [
        ...prevState.comments,
        { author: 'Ivan Ivanovich', date: currentDate, content: value },
      ],
      commentsCount: prevState.commentsCount + 1,
    }));
  };

  render() {
    const { comments, likesCount, commentsCount } = this.state;

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
        <CreateComment handleFormSubmit={this.handleFormSubmit} />
      </>
    );
  }
}

export default CommentsBlock;
