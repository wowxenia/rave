import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import api from '../../../api';
import Qualities from '../../ui/qualities';

const UserPage = ({ userId }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  }, []);
  const history = useHistory();
  const goToList = () => {
    user ? history.push('/users') : history.replace('/users');
  };
  if (user) {
    return (
      <>
        <div className='d-flex flex-column p-4 m-3 bg-light border'>
          <h3>{user.name}</h3>
          <h3>{<Qualities qualities={user.qualities} />}</h3>
          <h3>Profession: {user.profession.name}</h3>
          <h3>Completed meetings: {user.completedMeetings}</h3>
          <h3>Rate: {user.rate}</h3>
        </div>
        <button type='button' className='btn btn-dark m-3' onClick={goToList}>
          Все пользователи
        </button>
      </>
    );
  }
  return <h3 className='p-3'>loading...</h3>;
};

UserPage.propTypes = {
  userId: PropTypes.string.isRequired
};

export default UserPage;
