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

  render() {
    const { value } = this.state;
    const { handleFormSubmit } = this.props;

    return (
      <>
      <div className="CreateComment">
        <form onSubmit={event => handleFormSubmit(event, value)}>
          <textarea className="CreateComment__input" onChange={this.handleChange} value={value} rows="5" />
          <button className="CreateComment__submit-btn" type="submit">Написать консультанту</button>
        </form>
      </div>
      </>
    );
  }
}

export default CreateComment;
