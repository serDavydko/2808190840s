import React from 'react';

class CreateComment extends React.Component {
  state = {
    value: '',
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addComment(this.state.value);
    this.setState({
      value: '',
    });
  };

  render() {
    const { value } = this.state;

    return (
      <>
        <div className="CreateComment">
          <form onSubmit={event => this.handleSubmit(event)}>
            <textarea
              className="CreateComment__input"
              onChange={this.handleChange}
              value={value}
              rows="4"
              onKeyDown={(event) => {
                if (event.ctrlKey && event.keyCode === 13) {
                  this.handleSubmit(event);
                }
              }}
            />
            <button className="CreateComment__submit-btn" type="submit">
              Написать консультанту
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default CreateComment;
