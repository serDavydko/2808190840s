import React from "react";

import CounsultantInfo from "./CounsultantInfo";
import CommentsBlock from "./CommentsBlock";
import CreateComment from "./CreateComment";

import { messageData, consultantInfo } from "../API/sources";

class Widget extends React.Component {
  state = {
    person: {},
    comments: [],
    likesCount: 0,
    commentsCount: 0,
  };

  componentDidMount() {
    this.setState({
      person: consultantInfo,
      comments: messageData.messages,
      likesCount: messageData.likesCount,
      commentsCount: messageData.commentsCount,
    });
  }

  addComment = (value) => {
    if (value !== "") {
      const currentDate = new Date();

      this.setState(prevState => ({
        comments: [
          ...prevState.comments,
          { author: "Ivan Ivanovich", date: currentDate, content: value }
        ],
        commentsCount: prevState.commentsCount + 1
      }));
    }
  };

  render() {
    const { comments, likesCount, commentsCount, person } = this.state;

    return (
      <section className="Widget">
        <div className="Widget__main">
        <CounsultantInfo person={person} />
        <CommentsBlock
          comments={comments}
          likesCount={likesCount}
          commentsCount={commentsCount}
        />
        </div>
        <CreateComment addComment={this.addComment} />
      </section>
    );
  }
}

export default Widget;
