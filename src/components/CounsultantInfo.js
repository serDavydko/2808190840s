import React from 'react';

const ConsultantInfo = (props) => {
  const {
    name, position, status, photo,
  } = props.person;

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

        <div className="ConsultantInfo__statistics">
          <table className="ConsultantInfo__statistics-table">
            <tr className="headerRow">
              <th />
              <th className="header-icon">Услуг</th>
            </tr>
            <tr className="firstLine">
              <td rowSpan="3">
                <div className="graph-cont">
                  <div className="bar bar1">Ручное бронирование</div>
                  <div className="bar bar2">Пакетные туры</div>
                  <div className="bar bar3">Отели</div>
                </div>
              </td>
              <td className="col2 first-elem">11</td>
            </tr>
            <tr>
              <td className="col2">3</td>
            </tr>
            <tr>
              <td className="col2 last-elem">1</td>
            </tr>
            <tr>
              <td className="lastLine">Всего</td>
              <td className="lastLine">15</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default ConsultantInfo;
