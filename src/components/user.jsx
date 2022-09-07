import React, { useState } from 'react';
import API from '../api';

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const getColor = 'm-2 badge bg-';

  const nobodyRave = () => {
    return (
      <span className="badge bg-danger">
        с тобой никто не хочет тусить, лох :(
      </span>
    );
  };

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };

  const renderPhrase = (number, titles) => {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };

  const renderContent = () => {
    if (users.length > 0) {
      return (
        <div className="container">
          <h1>
            <span className="badge bg-primary">
              {users.length}{' '}
              {renderPhrase(users.length, ['человек', 'человека', 'человек'])}{' '}
              тусанет с тобой сегодня
            </span>
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>
                      {user.qualities.map((qualitie) => {
                        return (
                          <span
                            key={qualitie._id}
                            className={getColor + qualitie.color}
                          >
                            {qualitie.name}
                          </span>
                        );
                      })}
                    </td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="btn btn-danger"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>{nobodyRave()}</h1>;
    }
  };

  return <div className="container">{renderContent()}</div>;
};

export default Users;
