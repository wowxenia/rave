import React from 'react';
import Qualitie from './qualitie';
import BookMark from './bookmark';

const User = ({ props, handleDelete, handleToggleBookMark }) => {
  return (
    <>
      {props.map((user) => {
        return (
          <tr key={user._id} className="align-text-bottom">
            <td>{user.name}</td>
            <Qualitie qualities={user.qualities} />
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate} /5</td>
            <BookMark
              status={user.bookmark}
              id={user._id}
              click={handleToggleBookMark}
            />
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
    </>
  );
};

export default User;
