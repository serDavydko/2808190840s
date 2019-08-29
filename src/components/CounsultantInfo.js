import React from 'react';

import { consultantInfo } from '../API/sources';

class ConsultantInfo extends React.Component {
  state = {
    person: {},
  };

  componentDidMount() {
    this.setState({
      person: consultantInfo,
    });
  }

  render() {
    const {
      name, position, status, photo,
    } = this.state.person;

    return (
      <>
        <div className="ConsultantInfo">
          <div>
            <h3 className="ConsultantInfo__name">{name}</h3>
            <p className="ConsultantInfo__position">{position}</p>
            <p className="ConsultantInfo__status">{status}</p>
            <img
              className="ConsultantInfo__photo"
              src={photo}
              alt={`${name} ${position}`}
            />
          </div>

          <div className="ConsultantInfo__statistics"></div>
        </div>
      </>
    );
  }
}

export default ConsultantInfo;
